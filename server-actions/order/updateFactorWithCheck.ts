"use server";

import prisma from "@/lib/prisma";
import getDate from "@/server-actions/general/getDate";

export default async function updateFactorWithCheck(data: any) {
  const date = await getDate();

  try {
    const isSeen = await prisma.order.findFirst({
      where: {
        seen: 1,
        order_item: {
          some: {
            id: +data.id,
          },
        },
      },
    });

    if (isSeen) throw new Error("1");

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
  } catch (e: any) {
    console.error(e);
    if (e.message === "1") throw new Error("شما قادر به ویرایش نیستید");
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
