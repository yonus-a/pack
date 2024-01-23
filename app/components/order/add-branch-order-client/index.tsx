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
  date: any;
}

export default function AddBranchOrederClient({
  defaultBranch,
  categories,
  products,
  branches,
  date,
}: Props) {
  const [branch, setBranch] = useState(defaultBranch);
  const branchesOption = selectOptionsGenerator(branches);

  return (
    <div className="add-order-client">
      <h2>سفارش محصول برای شعبه</h2>
      <div className="top-section">
        <NextMuiSelect
          items={branchesOption}
          onChange={({ target }: any) => setBranch(target.value)}
          defaultValue={branch}
          label="شعبه"
        />
        <ProductFilter categories={categories} url="/panel/add-order" />
      </div>
      <AddOrderForm products={products} branch={branch} date={date} />
    </div>
  );
}
