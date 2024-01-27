"use server";

import prisma from "@/lib/prisma";

export default async function addProductToArchive(id: any) {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    if (!product) return false;

    return await prisma.product_archive.create({
      data: {
        categoryId: +product.categoryId,
        unitId: +product.unitId,
        typeId: +product.typeId,
        weight: product.weight,
        name: product.name,
        referId: id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
