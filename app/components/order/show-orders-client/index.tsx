"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import FilterOrders from "../filter-orders";
import { useRouter } from "next/navigation";
import "./styles.scss";

interface Props {
  orders: any;
  date: any;
}

export default function ShowOrdersClient({ orders, date }: Props) {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/panel/edit-order/${id}`);
  };

  return (
    <div className="show-orders-client">
      <FilterOrders date={date} />
      <Table>
        <Thead>
          <Tr>
            <Th>*</Th>
            <Th>شماره درخاست</Th>
            <Th>شعبه</Th>
            <Th>تاریخ ثبت</Th>
            <Th>وضعیت</Th>
            <Th>تعداد کل</Th>
            <Th>وزن کل</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders?.map((order: any, idx: number) => (
            <Tr key={order.id} onClick={() => handleClick(order.id)}>
              <Td>{idx + 1}</Td>
              <Td>{order.id}</Td>
              <Td>{order.branch?.name}</Td>
              <Td>{order.createdAt?.toLocaleString()}</Td>
              <Td>{order.order_status?.title}</Td>
              <Td>{order.total_orders}</Td>
              <Td>{order.total_weight}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}
