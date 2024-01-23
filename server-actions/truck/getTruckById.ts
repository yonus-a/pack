"use server";

import prisma from "@/lib/prisma";

export default async function getTruckById(id: number) {
  try {
    return await prisma.truck.findFirst({
      where: {
        id: +id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
