"use server";

import prisma from "@/lib/prisma";

export default async function getStock() {
  try {
    return await prisma.stock.findFirst({});
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
