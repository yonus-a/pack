"use server";

import prisma from "@/lib/prisma";

export default async function addOrderToArchive(id: any) {
  try {
    const order = await prisma.order.findFirst({
      where: {
        id,
      },
    });

    if (!order) return false;

    return await prisma.order_archive.create({
      data: {
        total_orders: +order.total_orders,
        total_weight: +order.total_weight,
        total_stock: +order.total_stock,
        branchId: +order.branchId,
        userId: order.userId,
        referId: id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
