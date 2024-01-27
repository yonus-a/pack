"use server";

import prisma from "@/lib/prisma";
import getDate from "../general/getDate";
import addTruckToArchive from "./addTruckToArchive";

export default async function editTruck(id: number, data: any) {
  const date = await getDate();

  // archive current truck
  await addTruckToArchive(id);

  try {
    return await prisma.truck.update({
      where: {
        id: +id,
      },
      data: {
        tonnage: +data.tonnage,
        name: data.name,
        updatedAt: date,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
