"use client";

import EqualizeItems from "../../general/equalize-items";
import ProductFilter from "../products-filter";
import AddOrderForm from "../add-order-form";
import "./styles.scss";

interface Props {
  categories: any;
  products: any;
  isAdmin: any;
  stock: any;
  date: any;
}

export default function AddOrederClient({
  categories,
  products,
  isAdmin,
  stock,
  date,
}: Props) {
  return (
    <div className="add-order-client">
      <h2>سفارش محصول</h2>
      {/* filter products */}
      <ProductFilter categories={categories} />
      {/* order products */}
      <AddOrderForm products={products} stock={stock} date={date} />
    </div>
  );
}
