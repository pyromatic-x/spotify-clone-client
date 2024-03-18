export default function debounce(func: Function, timeout: number) {
  let timer: string | number | NodeJS.Timeout | undefined;
  return (...args: any) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}
