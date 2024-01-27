"use server";

import prisma from "@/lib/prisma";

export default async function addTruckToArchive(id: number) {
  try {
    const truck = await prisma.truck.findFirst({
      where: {
        id,
      },
    });

    if (!truck) return false;

    return await prisma.truck_archive.create({
      data: {
        tonnage: +truck.tonnage,
        name: truck.name,
        referId: id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
