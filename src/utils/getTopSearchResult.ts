export default function getTopSearchResult(results: Array<any>) {
  const items = [];

  for (const key in results) {
    if (results[key]) {
      items.push(
        ...results[key].map((t: any) => {
          return {
            ...t,
            type: t.type || key,
          };
        }),
      );
    }
  }

  if (items.length) {
    return items[Math.floor(Math.random() * items.length)];
  }
  return null;
}
