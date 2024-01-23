"use client";

import calculateOrderInfo from "@/utils/order/calculateOrderInfo";
import { format } from "date-fns-jalali";
import AddDriver from "../add-driver";
import "./styles.scss";

interface Props {
  order: any;
  trucks: any;
}

export default function OrderInfo({ order, trucks }: Props) {
  const items = order.order_item;

  const {
    totalPasteurizeProductsWeight,
    totalStrileProductsWeight,
    countCategories,
    totalWeight,
    countTypes,
  } = calculateOrderInfo(items);

  return (
    <section className="order-info">
      <div className="top-section">
        <h2>
          <span>{order.branch.name}</span>
          <span>{format(order.createdAt, "yyyy/mm/dd")}</span>
        </h2>
      </div>
      <div className="body">
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
        <div className="types">
          <ul>
            {countTypes.map(({ name, count }: any) => (
              <li key={name}>
                {name} <strong>{count} عدد</strong>
              </li>
            ))}
          </ul>
        </div>
        <div className="categories">
          <ul>
            {countCategories.map(({ name, count }: any) => (
              <li key={name}>
                {name} <strong>{count} عدد</strong>
              </li>
            ))}
          </ul>
        </div>
        <AddDriver trucks={trucks} />
      </div>
    </section>
  );
}
