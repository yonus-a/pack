"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import ProductFilter from "../../order/products-filter";
import addStock from "@/server-actions/stock/addStock";
import { useRouter } from "next/navigation";
import { TextField } from "@mui/material";
import "./styles.scss";

interface Props {
  categories: any;
  products: any;
}

export default function AddStockClient({ products, categories }: Props) {
  const router = useRouter();

  const handleBlure = async ({ target }: any, id: string) => {
    try {
      await addStock(target.value, id);
    } catch (e) {}
  };

  return (
    <div className="add-stock-client">
      <h1>مدیریت موجودی انبار</h1>
      <div className="filters">
        <ProductFilter categories={categories} url="/panel/add-stock" />
      </div>
      <Table>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>کد یکتا</Th>
            <Th>نام محصول</Th>
            <Th>موجودی</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((item: any, idx: number) => {
            const stock = item.product_stock[0]?.amount;

            return (
              <Tr key={item.id}>
                <Td>{idx + 1}</Td>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>
                  <TextField
                    onBlur={(e) => handleBlure(e, item.id)}
                    defaultValue={stock}
                    type="number"
                  />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
}
