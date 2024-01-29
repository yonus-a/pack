"use server";

import prisma from "@/lib/prisma";

export default async function upsertFactory(id: number, data: any) {
  try {
    const options = {
      longitude: data.longitude,
      latitude: data.latitude,
      name: data.name,
    };

    return await prisma.factory.upsert({
      where: {
        id: id || 0,
      },
      create: options,
      update: options,
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
