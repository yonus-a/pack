"use server";

import prisma from "@/lib/prisma";
import getDate from "@/server-actions/general/getDate";

export default async function updateFactor(data: any) {
  const date = await getDate();

  try {
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
