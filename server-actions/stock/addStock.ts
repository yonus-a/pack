"use server";

import prisma from "@/lib/prisma";

export default async function addStock(data: any) {
  try {
    // delete current stock
    await prisma.stock.deleteMany({});

    // add new stock
    return await prisma.stock.create({
      data: {
        amount: data.amount,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
