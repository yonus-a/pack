"use server";

import prisma from "@/lib/prisma";

export default async function addOrder(data: any) {
  console.log(data);
  try {
    return await prisma.order.createMany({
      data: data.map((item: any) => ({
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
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
