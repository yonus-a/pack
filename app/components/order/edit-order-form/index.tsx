"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import { useRouter } from "next/navigation";
import { TextField } from "@mui/material";
import { isEqual } from "date-fns-jalali";
import "./styles.scss";

interface Props {
  handleUpdateFactor: any;
  order: any;
}

export default function EditOrderForm({ order, handleUpdateFactor }: Props) {
  const router = useRouter();
  return (
    <div className="edit-order-form">
      <Table>
        <Thead>
          <Tr>
            <Th>*</Th>
            <Th>شناسه محصول</Th>
            <Th>عنوان محصول</Th>
            <Th>ضریب</Th>
            <Th>نوع سنجش</Th>
            <Th>تعداد</Th>
            <Th>وزن کل</Th>
            <Th>بودجه ماهیانه</Th>
            <Th>بودجه روز</Th>
            <Th>موجودی</Th>
            <Th>پیشنهادی</Th>
          </Tr>
        </Thead>
        <Tbody>
          {order.order_item?.map((item: any, idx: number) => {
            const product = item.product;
            const isModify = !isEqual(item.createdAt, item.updatedAt);

            return (
              <Tr>
                <Td>{idx + 1}</Td>
                <Td>{item.id}</Td>
                <Td>{product?.name}</Td>
                <Td>
                  <TextField
                    onBlur={(e) => handleUpdateFactor(e, item)}
                    defaultValue={item.factor}
                    className={isModify ? "modify" : ""}
                    type="number"
                  />
                </Td>
                <Td>{product?.product_unit?.name}</Td>
                <Td>{item.number}</Td>
                <Td>{item.totalWeight}</Td>
                <Td>{item.monthlyBudget}</Td>
                <Td>{item.dailyBudget}</Td>
                <Td>{item.stock}</Td>
                <Td>0</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
}
