"use server";

import prisma from "@/lib/prisma";

export default async function getProducts() {
  try {
    return await prisma.product.findMany({
      include: {
        product_category: true,
        product_type: true,
        product_unit: true,
        budget: true,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
