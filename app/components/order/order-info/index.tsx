"use client";

interface Props {
  order: any;
}

export default function OrderInfo({ order }: Props) {
  const items = order.order_item;

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

  return (
    <section className="order-info">
      <div className="top-section">
        <h2>
          <span>{order.branch.name}</span>
          <span>{order.createdAt.toLocaleString()}</span>
        </h2>
        <div className="weight">
          <p>
            وزن بخش استریل سفارش
            <strong>{totalStrileProductsWeight}</strong>
          </p>
          <p>
            وزن بخش پاستوریزه سفارش
            <strong>{totalPasteurizeProductsWeight}</strong>
          </p>
          <p>
            وزن کل سفارش
            <strong>{totalWeight}</strong>
          </p>
        </div>
        <ul className="categories">
          {countTypes.map(({ name, count }: any) => (
            <li key={name}>
              {name} <strong>{count}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
