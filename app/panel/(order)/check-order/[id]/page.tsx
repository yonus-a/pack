import getProductCategories from "@/server-actions/product/getProductCategories";
import CheckOrderClient from "@/app/components/order/check-order-client";
import getOrderById from "@/server-actions/order/getOrderById";
import { isAdmin } from "@/server-actions/permissions";
import getDate from "@/server-actions/general/getDate";
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
  const stock = 0;
  const date = await getDate();

  const { category } = searchParams;

  if (category) {
    order.order_item = order.order_item.filter(
      (item) => item.product.categoryId === +category
    );
  }

  return (
    <CheckOrderClient
      categories={categories}
      order={order}
      stock={stock}
      date={date}
    />
  );
}
