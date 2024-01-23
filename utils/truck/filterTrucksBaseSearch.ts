export default function filterTrucksBaseSearch(value: string) {
  if (!value) return {};

  const nextValue = value?.trim();

  return {
    OR: [
      {
        name: {
          contains: nextValue,
        },
      },
    ],
  };
}
