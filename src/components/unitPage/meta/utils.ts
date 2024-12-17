import tinycolor from 'tinycolor2';

export const darkenAccent = (accent?: string) => {
  if (!accent) return undefined;
  return tinycolor(accent).setAlpha(0.9).darken(20).toString();
};
