interface Props {
  order: any;
}

export default function OrderInfo({ order }: Props) {
  const items = order.order_item;

  const PasteurizeProducts = items.filter((item: any) => item.type == 2);
  //   //   const totalPasteurizeProducts = items.reduce((c, a) => c + a, 0);
  console.log(PasteurizeProducts);

  return (
    <section className="order-info">
      <div className="top-section">
        <h2>
          <span>{order.branch.name}</span>
          <span>{order.createdAt.toLocaleString()}</span>
        </h2>
        <div className="weight">
          {/* <p>
            وزن بخش استریل سفارش
            <strong>{order}</strong>
          </p>
          <p>
            وزن بخش پاستوریزه سفارش
            <strong>{order}</strong>
          </p> */}
          <p>
            وزن کل سفارش
            <strong>{order.totalWeight}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
