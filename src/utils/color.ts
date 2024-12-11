export function generateColors(): Array<string> {
  const minValue = 100;
  const maxValue = 240;

  const colors = ['#21115F'];

  while (colors.length < 8) {
    const r = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    const g = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    const b = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    const color = `rgb(${r}, ${g}, ${b}, 0.3)`;

    if (!colors.includes(color)) {
      colors.push(color);
    }
  }

  return colors;
}
