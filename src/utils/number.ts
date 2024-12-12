export const stringToNumberWithDigits = (str: string, divider: ',' | '.' = ',') => {
  if (isNaN(Number(str))) return '';
  return str
    .split('')
    .reverse()
    .map((n, index) => (index % 3 === 0 && index !== 0 ? n + divider : n))
    .reverse()
    .join('');
};
