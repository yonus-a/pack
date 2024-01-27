import OrderManagmentClient from "@/app/components/order/order-managment-client";
import NextTablePagination from "@/app/components/general/next-table-pagination";
import filterOrders from "@/server-actions/order/filterOrders";
import AddLinkBtn from "@/app/components/general/add-link-btn";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permission/permissions";
import getDate from "@/server-actions/general/getDate";
import { notFound } from "next/navigation";
import "./styles.scss";

export default async function OrderManagment({ searchParams }: any) {
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const take = +searchParams.take || 20;
  const page = +searchParams.page || 0;
  const { orders, countOrders } = await filterOrders(searchParams, page, take);
  const date = await getDate();

  return (
    <Container>
      <AddLinkBtn href={"/panel/add-branch-order"}>اضافه کردن</AddLinkBtn>
      <OrderManagmentClient orders={orders} date={date} />
      <NextTablePagination total={countOrders} page={page} take={take} />
    </Container>
  );
}
