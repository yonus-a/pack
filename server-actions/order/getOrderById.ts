"use server";

import prisma from "@/lib/prisma";

export default async function getOrderById(id: any) {
  try {
    return await prisma.order.findFirst({
      where: {
        id,
      },
      include: {
        order_status: true,
        order_item: true,
        branch: true,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
