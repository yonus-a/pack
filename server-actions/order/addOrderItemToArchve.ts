"use server";

import prisma from "@/lib/prisma";

export default async function addOrderItemToArchive(id: any) {
  try {
    const item = await prisma.order_item.findFirst({
      where: {
        id,
      },
    });

    if (!item) return false;

    return await prisma.order_item_archive.create({
      data: {
        monthlyBudget: item.monthlyBudget,
        dailyBudget: item.dailyBudget,
        totalWeight: item.totalWeight,
        productId: item.productId,
        orderId: item.orderId,
        deleted: item.deleted,
        number: item.number,
        factor: item.factor,
        weight: item.weight,
        stock: item.stock,
        unit: item.unit,
        referId: id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
