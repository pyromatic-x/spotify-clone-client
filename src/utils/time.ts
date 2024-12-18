export function formatDuration(value?: number) {
  if (!value && value !== 0) return '-:--';

  const minute = Math.floor(value / 60);
  const secondLeft = Math.floor(value - minute * 60);
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
}

export function secondsToTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  let result = '';
  if (hours) result += hours + 'hr ';
  if (minutes) result += minutes + 'min';

  return result;
}
