"use server";

import prisma from "@/lib/prisma";
import getDate from "../general/getDate";

export default async function addOrder({ data, branch, userId }: any) {
  const date = await getDate();

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
        branchId: +branch,
        unit: +item.unit,
        userId: userId,
        orderAt: date,
      })),
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
