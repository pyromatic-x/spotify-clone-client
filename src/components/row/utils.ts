export const getItemsCount = (width: number) => {
  if (width <= 420) return 2;
  else if (width <= 500) return 3;
  else if (width <= 650) return 4;
  else if (width <= 850) return 5;
  else if (width <= 1000) return 6;
  else if (width <= 1150) return 7;
  else if (width <= 1250) return 5;
  else if (width <= 1300) return 6;
  else if (width <= 1500) return 7;
  else if (width <= 1700) return 8;
  else if (width <= 1950) return 9;

  return 9;
};
