import getProductCategories from "@/server-actions/product/getProductCategories";
import CheckOrderClient from "@/app/components/order/check-order-client";
import getOrderById from "@/server-actions/order/getOrderById";
import addOrderSeen from "@/server-actions/order/addOrderSeen";
import getTrucks from "@/server-actions/truck/getTrucks";
import { isAdmin } from "@/server-actions/permission/permissions";
import { notFound } from "next/navigation";

export default async function CheckOrder({ params, searchParams }: any) {
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const id = params.id;
  const order = await getOrderById(id);

  if (!order) {
    return notFound();
  }

  const categories = await getProductCategories();
  const trucks = await getTrucks();
  const { category } = searchParams;

  // add seen order
  await addOrderSeen(id);

  if (category) {
    order.order_item = order.order_item.filter(
      (item) => item.product.categoryId === +category
    );
  }

  return (
    <CheckOrderClient categories={categories} order={order} trucks={trucks} />
  );
}
