"use server";

import prisma from "@/lib/prisma";

export default async function getTrucks() {
  try {
    return await prisma.truck.findMany({});
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
