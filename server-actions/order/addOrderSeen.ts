"use server";

import prisma from "@/lib/prisma";

export default async function addOrderSeen(id: string) {
  try {
    return await prisma.order.update({
      where: {
        id,
      },
      data: {
        seen: 1,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
