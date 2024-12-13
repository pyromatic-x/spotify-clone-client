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
