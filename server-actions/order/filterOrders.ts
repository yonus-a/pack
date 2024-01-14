"use server";

import filterOrderBaseCategory from "@/utils/order/filterOrderBaseCategory";
import filterOrderBaseSearch from "@/utils/order/filterOrderBaseSearch";
import filterOrderBaseType from "@/utils/order/filterOrderBaseType";
import prisma from "@/lib/prisma";
import filterOrderBaseDate from "@/utils/order/filterOrderBaseDate";

export default async function filterOrders(searchParams: any) {
  try {
    const { search, type, category, date } = searchParams;

    const filters: any = {
      ...filterOrderBaseCategory(category),
      ...filterOrderBaseSearch(search),
      ...filterOrderBaseDate(date),
      ...filterOrderBaseType(type),
      deleted: 0,
    };

    const orders = await prisma.order.findMany({
      where: filters,
      include: {
        product: true,
        order_status: true,
      },
    });

    const countOrders = await prisma.order.count({
      where: filters,
    });

    return {
      orders,
      countOrders,
    };
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
