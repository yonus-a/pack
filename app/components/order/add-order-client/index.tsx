"use client";

import selectOptionsGenerator from "@/utils/selectOptionsGenerator";
import NextMuiSelect from "../../general/next-mui-select";
import ProductFilter from "../products-filter";
import AddOrderForm from "../add-order-form";
import { useState } from "react";
import "./styles.scss";

interface Props {
  defaultBranch: any;
  categories: any;
  products: any;
  branches: any;
  isAdmin: any;
  stock: any;
  date: any;
}

export default function AddOrederClient({
  defaultBranch,
  categories,
  products,
  branches,
  isAdmin,
  stock,
  date,
}: Props) {
  const [branch, setBranch] = useState(defaultBranch);
  const branchesOption = selectOptionsGenerator(branches);

  return (
    <div className="add-order-client">
      <h2>سفارش محصول</h2>
      <div className="top-section">
        {/* if user is admin should pick a branch */}
        {isAdmin && (
          <NextMuiSelect
            items={branchesOption}
            onChange={({ target }: any) => setBranch(target.value)}
            defaultValue={branch}
          />
        )}
        <ProductFilter categories={categories} />
      </div>
      <AddOrderForm
        products={products}
        branch={branch}
        isAdmin={isAdmin}
        stock={stock}
        date={date}
      />
    </div>
  );
}
