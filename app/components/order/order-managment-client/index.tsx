"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import FilterOrders from "../filter-orders";
import "./styles.scss";

interface Props {
  orders: any;
  date: any;
}

export default function ({ orders, date }: Props) {
  return (
    <div className="div">
      <h2>مدیریت سفارشات</h2>
      <div className="order-filter">
        <FilterOrders date={date} />
      </div>
      <Table>
        <Thead>
          <Tr>
            <Th>*</Th>
            <Th>شناسه محصول</Th>
            <Th>عنوان محصول</Th>
            <Th>وزن</Th>
            <Th>ضریب</Th>
            <Th>نوع سنجش</Th>
            <Th>تعداد</Th>
            <Th>وزن کل</Th>
            <Th>وضعیت</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order: any, idx: number) => (
            <Tr key={order.id}>
              <Td>{idx + 1}</Td>
              <Td>{order.productId}</Td>
              <Td>{order.product.name}</Td>
              <Td>{order.weight}</Td>
              <Td>{order.factor}</Td>
              <Td>{order.unit}</Td>
              <Td>{order.number}</Td>
              <Td>{order.totalWeight}</Td>
              <Td>{order.order_status?.title}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}
