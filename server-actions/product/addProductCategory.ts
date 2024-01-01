"use server";

import prisma from "@/lib/prisma";

export default async function addProductCategory(name: any) {
  try {
    return prisma.product_category.create({
      data: {
        name,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
