export default function filterOrderBaseCategory(categoryId: number) {
  if (!categoryId) return {};

  return {
    product: {
      categoryId,
    },
  };
}
