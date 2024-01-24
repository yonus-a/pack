"use server";

import prisma from "@/lib/prisma";

export default async function updateStocks(data: any) {
  try {
    // delete existed budgets
    await prisma.product_stock.deleteMany({});

    // insert new budgets
    return await prisma.product_stock.createMany({
      data: data.map(({ id, productId, amount, factor }: any) => ({
        amount: `${factor * amount}`,
        productId,
        id: +id,
      })),
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
