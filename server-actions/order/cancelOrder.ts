"use server";

import prisma from "@/lib/prisma";

export default async function cancelOrder(id: string) {
  try {
    return await prisma.order.update({
      where: {
        id,
      },
      data: {
        statusId: 4,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
