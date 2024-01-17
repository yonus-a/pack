import getProductCategories from "@/server-actions/product/getProductCategories";
import EditOrderClient from "@/app/components/order/edit-order-client";
import getOrderById from "@/server-actions/order/getOrderById";
import { isAdmin } from "@/server-actions/permissions";
import { notFound } from "next/navigation";

export default async function EditOrder({ params, searchParams }: any) {
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
  const { category } = searchParams;

  if (category) {
    order.order_item = order.order_item.filter(
      (item) => item.product.categoryId === +category
    );
  }

  return <EditOrderClient categories={categories} order={order} />;
}
