import tinycolor from 'tinycolor2';

export function generateColor(opacity: number = 0.3): string {
  const minValue = 100;
  const maxValue = 240;

  const r = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  const g = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  const b = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

  return `rgb(${r}, ${g}, ${b}, ${opacity})`;
}
export function generateFeaturedColors(): Array<string> {
  const colors = ['#21115F'];

  while (colors.length < 8) {
    const color = generateColor();

    if (!colors.includes(color)) {
      colors.push(color);
    }
  }

  return colors;
}

type TPaletteRGBValues = Array<{ r: number; g: number; b: number }>;

export const getColorPaletteFromImage = (image: HTMLImageElement) => {
  image.crossOrigin = 'Anonymous';

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) throw new Error('Canvas context not supported');

  canvas.width = image.width;
  canvas.height = image.height;
  context.drawImage(image, 0, 0);

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  const rgbArray = buildRgb(imageData.data);

  if (imageData.data.every((t) => t === 0)) return null;

  const quantColors = quantization(rgbArray, 0);

  const sorted = orderByLuminance(quantColors);

  const colors = sorted.map((t) => '#' + tinycolor(t).toHex());

  const filtered = colors.filter((color) => {
    const lum = tinycolor(color).getLuminance();
    const brs = tinycolor(color).getBrightness();

    return lum < 0.9 && lum > 0.2 && brs < 190;
  });

  const luminance = filtered.map((t) => tinycolor(t).getLuminance());
  const brig = filtered.map((t) => tinycolor(t).getBrightness());

  console.log(luminance);
  console.log(brig);

  return filtered;
};
export const getAccentFromImage = (image: HTMLImageElement) => {
  image.crossOrigin = 'Anonymous';

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context || !image.complete) return undefined;

  canvas.width = image.width;
  canvas.height = image.height;
  context.drawImage(image, 0, 0);

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  const rgbArray = buildRgb(imageData.data);

  if (imageData.data.every((t) => t === 0)) return null;

  const quantColors = quantization(rgbArray, 0);
  const sorted = orderByLuminance(quantColors).reverse();

  const filtered = sorted.filter((color) => {
    const lum = tinycolor(color).getLuminance();
    const brs = tinycolor(color).getBrightness();

    return lum < 0.9 && lum > 0.1 && brs < 190;
  });

  const color = filtered.length ? filtered[0] : sorted[0];

  return '#' + tinycolor(color).darken(5).toHex();
};

const orderByLuminance = (rgbValues: TPaletteRGBValues) => {
  const calculateLuminance = (p: TPaletteRGBValues[0]) => {
    return 0.2126 * p.r + 0.7152 * p.g + 0.0722 * p.b;
  };

  return rgbValues.sort((p1, p2) => {
    return calculateLuminance(p2) - calculateLuminance(p1);
  });
};

const buildRgb = (imageData: Uint8ClampedArray): TPaletteRGBValues => {
  const rgbValues = [];
  for (let i = 0; i < imageData.length; i += 4) {
    const rgb = {
      r: imageData[i],
      g: imageData[i + 1],
      b: imageData[i + 2],
    };

    rgbValues.push(rgb);
  }

  return rgbValues;
};

const findBiggestColorRange = (rgbValues: TPaletteRGBValues): 'r' | 'g' | 'b' => {
  let rMin = Number.MAX_VALUE;
  let gMin = Number.MAX_VALUE;
  let bMin = Number.MAX_VALUE;

  let rMax = Number.MIN_VALUE;
  let gMax = Number.MIN_VALUE;
  let bMax = Number.MIN_VALUE;

  rgbValues.forEach((pixel) => {
    rMin = Math.min(rMin, pixel.r);
    gMin = Math.min(gMin, pixel.g);
    bMin = Math.min(bMin, pixel.b);

    rMax = Math.max(rMax, pixel.r);
    gMax = Math.max(gMax, pixel.g);
    bMax = Math.max(bMax, pixel.b);
  });

  const rRange = rMax - rMin;
  const gRange = gMax - gMin;
  const bRange = bMax - bMin;

  const biggestRange = Math.max(rRange, gRange, bRange);
  if (biggestRange === rRange) {
    return 'r';
  } else if (biggestRange === gRange) {
    return 'g';
  } else {
    return 'b';
  }
};

const quantization = (rgbValues: TPaletteRGBValues, depth: number): TPaletteRGBValues => {
  const MAX_DEPTH = 4;

  // Base case
  if (depth === MAX_DEPTH || rgbValues.length === 0) {
    const color = rgbValues.reduce(
      (prev, curr) => {
        prev.r += curr.r;
        prev.g += curr.g;
        prev.b += curr.b;

        return prev;
      },
      {
        r: 0,
        g: 0,
        b: 0,
      },
    );

    color.r = Math.round(color.r / rgbValues.length);
    color.g = Math.round(color.g / rgbValues.length);
    color.b = Math.round(color.b / rgbValues.length);

    return [color];
  }

  const componentToSortBy = findBiggestColorRange(rgbValues);
  rgbValues.sort((p1, p2) => {
    return p1[componentToSortBy] - p2[componentToSortBy];
  });

  const mid = rgbValues.length / 2;
  return [
    ...quantization(rgbValues.slice(0, mid), depth + 1),
    ...quantization(rgbValues.slice(mid + 1), depth + 1),
  ];
};
