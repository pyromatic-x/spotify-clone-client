export function getDateValues(date: string) {
  const _date = new Date(date);

  const year = String(_date.getFullYear());
  const month = String(_date.toLocaleString('default', { month: 'short' }));
  const weekday = _date.toLocaleDateString('default', { weekday: 'short' });
  const day = String(_date.getDate());
  const time = _date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  return { year, month, day, weekday, time };
}
