import NextTablePagination from "@/app/components/general/next-table-pagination";
import ShowOrdersClient from "@/app/components/order/show-orders-client";
import filterOrders from "@/server-actions/order/filterOrders";
import AddLinkBtn from "@/app/components/general/add-link-btn";
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

  const take = +searchParams.take || 20;
  const page = +searchParams.page || 0;
  const { orders, countOrders } = await filterOrders(searchParams, page, take);
  const date = await getDate();

  return (
    <Container>
      <AddLinkBtn href={"/panel/add-order"}>اضافه کردن</AddLinkBtn>
      <ShowOrdersClient orders={orders} date={date} />
      <NextTablePagination total={countOrders} page={page} take={take} />
    </Container>
  );
}
