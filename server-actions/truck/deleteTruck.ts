"use server";

import prisma from "@/lib/prisma";

export default async function deleteTruck(id: number) {
  try {
    return await prisma.truck.delete({
      where: {
        id: +id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
