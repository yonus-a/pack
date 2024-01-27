"use server";

import prisma from "@/lib/prisma";
import addProductToArchive from "./addProductToArchive";

export default async function editProduct(id: string, data: any) {
  try {
    // archive current product
    await addProductToArchive(id);

    return await prisma.product.update({
      where: {
        id,
      },
      data: {
        categoryId: +data.category,
        weight: data.weight,
        unitId: +data.unit,
        typeId: +data.type,
        name: data.name,
        id: data.id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
