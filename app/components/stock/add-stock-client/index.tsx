"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import { useRouter } from "next/navigation";
import { TextField } from "@mui/material";
import "./styles.scss";

interface Props {
  products: any;
}

export default function AddStockClient({ products }: Props) {
  const router = useRouter();

  const handleBlure = () => {
    // TODO
  };

  return (
    <div className="add-stock-client">
      <h1>مدریت موجودی انبار</h1>
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
          {products.map((item: any, idx: number) => (
            <Tr key={item.id}>
              <Td>{idx + 1}</Td>
              <Td>{item.id}</Td>
              <Td>{item.name}</Td>
              <Td>
                <TextField onBlur={() => {}} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}
