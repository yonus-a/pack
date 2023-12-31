export default function filterBranchesBaseSearch(value: string) {
  if (!value) return {};

  const nextValue = value?.trim();

  return {
    OR: [
      {
        name: {
          contains: nextValue,
        },
      },
      {
        province: {
          contains: nextValue,
        },
      },
      {
        city: {
          contains: nextValue,
        },
      },
      {
        address: {
          contains: nextValue,
        },
      },
      {
        distance_to_central_warehouse: {
          contains: nextValue,
        },
      },
      {
        distance_to_factory: {
          contains: nextValue,
        },
      },
    ],
  };
}
