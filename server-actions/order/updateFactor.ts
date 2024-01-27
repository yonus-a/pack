"use server";

import addOrderItemToArchive from "./addOrderItemToArchve";
import getDate from "@/server-actions/general/getDate";
import prisma from "@/lib/prisma";

export default async function updateFactor(data: any) {
  try {
    const date = await getDate();

    // archive current order item
    await addOrderItemToArchive(data.id);

    return await prisma.order_item.update({
      where: {
        id: +data.id,
      },
      data: {
        factor: data.factor,
        totalWeight: `${data.totalWeight}`,
        number: data.number,
        updatedAt: date,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
