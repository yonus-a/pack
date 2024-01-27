"use server";

import prisma from "@/lib/prisma";
import addOrderToArchive from "./addOrderToArchve";

export default async function conformOrder(id: string) {
  try {
    // archive current order
    await addOrderToArchive(id);

    return await prisma.order.update({
      where: {
        id,
      },
      data: {
        statusId: 2,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
