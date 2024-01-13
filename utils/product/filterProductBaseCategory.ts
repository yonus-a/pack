export default function filterProductsBaseCategory(value: string) {
  if (!value) return {};

  return {
    categoryId: +value,
  };
}
