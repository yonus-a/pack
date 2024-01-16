export default function calculateOrderInfo(items: any) {
  const PasteurizeProducts = items.filter(
    ({ product }: any) => product.typeId == 2
  );

  const StrileProducts = items.filter(
    ({ product }: any) => product.typeId == 1
  );

  const totalPasteurizeProductsWeight = PasteurizeProducts.reduce(
    (c: any, v: any) => c + +v.totalWeight,
    0
  );

  const totalStrileProductsWeight = StrileProducts.reduce(
    (c: any, v: any) => c + +v.totalWeight,
    0
  );

  const totalWeight = items.reduce((c: any, v: any) => c + +v.totalWeight, 0);

  const types = items.map(({ product }: any) => product.product_type);

  const filterdTypes = types.reduce((acc: any, val: any) => {
    if (acc.find((item: any) => item.name == val.name)) return acc;
    acc.push(val);
    return acc;
  }, []);

  const countTypes = filterdTypes.map(({ id, name }: any) => {
    const count = items.filter((item: any) => item.product.typeId == id).length;
    return { name, count };
  });

  const categories = items.map(({ product }: any) => product.product_category);

  const filterdCategories = categories.reduce((acc: any, val: any) => {
    if (acc.find((item: any) => item.name == val.name)) return acc;
    acc.push(val);
    return acc;
  }, []);

  const countCategories = filterdCategories.map(({ id, name }: any) => {
    const count = items.filter(
      (item: any) => item.product?.categoryId == id
    ).length;
    return { name, count };
  });

  return {
    totalPasteurizeProductsWeight,
    totalStrileProductsWeight,
    countCategories,
    totalWeight,
    countTypes,
  };
}
