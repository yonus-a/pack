"use server";

import prisma from "@/lib/prisma";

export default async function addDriver({ driver, orderId }: any) {
  try {
    // delete all driver for an order
    await prisma.driver.deleteMany({
      where: {
        orderId,
      },
    });

    // insert new drivers
    return await prisma.driver.createMany({
      data: driver.map((item: any) => ({
        numberplate: item.numberplate,
        truckId: +item.truckId,
        phone: item.phone,
        name: item.name,
        orderId,
      })),
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
