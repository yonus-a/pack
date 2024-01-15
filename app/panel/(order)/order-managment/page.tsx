import OrderManagmentClient from "@/app/components/order/order-managment-client";
import getProductCategories from "@/server-actions/product/getProductCategories";
import getProductTypes from "@/server-actions/product/getProductTypes";
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
  const categories = await getProductCategories();
  const types = await getProductTypes();
  const date = await getDate();

  return (
    <Container>
      <OrderManagmentClient
        categories={categories}
        orders={orders}
        types={types}
        date={date}
      />
    </Container>
  );
}
