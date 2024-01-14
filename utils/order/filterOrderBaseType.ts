export default function filterOrderBaseType(type: number) {
  if (!type) return {};

  return {
    product: {
      product_type: {
        id: type,
      },
    },
  };
}
