export default function filterOrderBaseSearch(search: number) {
  if (!search) return {};

  return {
    OR: [
      {
        productId: {
          contains: search,
        },
      },
      {
        product: {
          name: {
            contains: search,
          },
        },
      },
      {
        product: {
          product_type: {
            name: {
              contains: search,
            },
          },
        },
      },
    ],
  };
}
