"use server";

import prisma from "@/lib/prisma";
import getDate from "../general/getDate";
import getRandomInt from "@/utils/general/getRandomInt";

export default async function addOrder(data: any) {
  const date = await getDate();

  try {
    return await prisma.order.create({
      data: {
        id: `${getRandomInt(1111111, 2222222)}`,
        total_orders: +data.total_orders,
        total_weight: +data.total_weight,
        total_stock: +data.total_stock,
        branchId: +data.branch,
        userId: data.userId,
        createdAt: date,
        order_item: {
          createMany: {
            data: data.items.map((item: any) => ({
              monthlyBudget: +item.monthlyBudget,
              totalWeight: `${item.totalWeight}`,
              dailyBudget: +item.dailyBudget,
              productId: item.productId,
              weight: `${item.weight}`,
              number: item.number,
              factor: item.factor,
              stock: +item.stock,
              unit: +item.unit,
            })),
          },
        },
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
