"use server";

import filterOrderBaseCategory from "@/utils/order/filterOrderBaseCategory";
import filterOrderBaseSearch from "@/utils/order/filterOrderBaseSearch";
import filterOrderBaseType from "@/utils/order/filterOrderBaseType";
import filterOrderBaseDate from "@/utils/order/filterOrderBaseDate";
import prisma from "@/lib/prisma";

export default async function filterOrders(
  searchParams: any,
  page: number,
  take: number
) {
  try {
    const { search, type, category, date } = searchParams;

    const filters: any = {
      ...filterOrderBaseCategory(+category),
      ...filterOrderBaseSearch(search),
      ...filterOrderBaseType(+type),
      ...filterOrderBaseDate(date),
      deleted: 0,
    };

    const orders = await prisma.order.findMany({
      take,
      skip: page * take,
      where: filters,
      include: {
        order_status: true,
        order_item: true,
        branch: true,
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
