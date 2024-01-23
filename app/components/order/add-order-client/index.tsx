"use client";

import ProductFilter from "../products-filter";
import AddOrderForm from "../add-order-form";
import "./styles.scss";

interface Props {
  defaultBranch: any;
  categories: any;
  products: any;
  branches: any;
  date: any;
}

export default function AddOrederClient({
  defaultBranch,
  categories,
  products,
  date,
}: Props) {
  return (
    <div className="add-order-client">
      <h2>سفارش محصول</h2>
      <div className="top-section">
        <ProductFilter categories={categories} url="/panel/add-order" />
      </div>
      <AddOrderForm products={products} branch={defaultBranch} date={date} />
    </div>
  );
}
