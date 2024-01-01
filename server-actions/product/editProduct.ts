"use server";

import prisma from "@/lib/prisma";

export default async function editProduct(id: string, data: any) {
  try {
    return await prisma.product.update({
      where: {
        id,
      },
      data: {
        id: data.id,
        name: data.name,
        categoryId: +data.category,
        unitId: +data.unit,
        typeId: +data.type,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
