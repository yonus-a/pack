"use server";

import prisma from "@/lib/prisma";

export default async function addStock(value: any, id: string) {
  try {
    return prisma.product.update({
      where: {
        id,
      },
      data: {
        product_stock: {
          deleteMany: {},
          create: {
            amount: value,
          },
        },
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
