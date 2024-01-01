export default function filterProductsBaseSearch(value: string) {
  if (!value) return {};

  const nextValue = value?.trim();

  return {
    OR: [
      {
        id: {
          contains: nextValue,
        },
      },
      {
        name: {
          contains: nextValue,
        },
      },
      {
        product_category: {
          name: {
            contains: nextValue,
          },
        },
      },
      {
        product_type: {
          name: {
            contains: nextValue,
          },
        },
      },
      {
        product_unit: {
          name: {
            contains: nextValue,
          },
        },
      },
    ],
  };
}
