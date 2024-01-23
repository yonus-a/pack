"use server";

import prisma from "@/lib/prisma";

export default async function addTruck(data: any) {
  try {
    return await prisma.truck.create({
      data: {
        tonnage: +data.tonnage,
        name: data.name,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
