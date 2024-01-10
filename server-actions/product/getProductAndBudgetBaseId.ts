"use server";

import prisma from "@/lib/prisma";

export default async function getProductAndBudgetBaseId(id: string) {
  try {
    return await prisma.product.findFirst({
      where: {
        id,
      },
      include: {
        budget: true,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
