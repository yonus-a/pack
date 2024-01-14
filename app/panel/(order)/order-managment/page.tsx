import OrderManagmentClient from "@/app/components/order/order-managment-client";
import filterOrders from "@/server-actions/order/filterOrders";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permissions";
import getDate from "@/server-actions/general/getDate";
import { notFound } from "next/navigation";
import "./styles.scss";

export default async function OrderManagment({ searchParams }: any) {
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const { orders, countOrders } = await filterOrders(searchParams);
  const date = await getDate();

  return (
    <Container>
      <OrderManagmentClient orders={orders} date={date} />
    </Container>
  );
}
