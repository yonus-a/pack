"use server";

import prisma from "@/lib/prisma";

export default async function deleteProductLimitBudget(id: number) {
  try {
    return await prisma.limit_budget.delete({
      where: {
        id: +id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
