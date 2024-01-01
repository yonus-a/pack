"use server";

import prisma from "@/lib/prisma";

export default async function addProductUnit({ name, unit }: any) {
  try {
    return await prisma.product_unit.create({
      data: {
        name,
        unit: +unit,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
