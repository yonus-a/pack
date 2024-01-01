"use server";

import prisma from "@/lib/prisma";

export default async function getProductCategories() {
  try {
    return await prisma.product_category.findMany({
      orderBy: {
        id: "desc",
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
