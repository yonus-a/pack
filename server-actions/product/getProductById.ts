"use server";

import prisma from "@/lib/prisma";

export default async function getProduct(id: string) {
  try {
    return await prisma.product.findFirst({
      where: {
        id,
      },
      include: {
        product_category: true,
        product_type: true,
        product_unit: true,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
