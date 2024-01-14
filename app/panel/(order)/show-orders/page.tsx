import ShowOrdersClient from "@/app/components/order/show-orders-client";
import filterOrders from "@/server-actions/order/filterOrders";
import Container from "@/app/components/general/container";
import { isRegister } from "@/server-actions/permissions";
import getDate from "@/server-actions/general/getDate";
import { notFound } from "next/navigation";
import "./styles.scss";

export default async function showOrders({ searchParams }: any) {
  const register = await isRegister();

  if (!register) {
    return notFound();
  }

  const { orders, countOrders } = await filterOrders(searchParams);
  const date = await getDate();

  return (
    <Container>
      <ShowOrdersClient orders={orders} date={date} />
    </Container>
  );
}
