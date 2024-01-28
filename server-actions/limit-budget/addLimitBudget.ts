"use server";

import prisma from "@/lib/prisma";

export default async function addLimitBudget(data: any) {
  try {
    return await prisma.limit_budget.create({
      data: {
        branchId: +data.branchId,
        productId: data.productId,
        permement: +data.permement,
        limit: +data.limit,
        from: data.from,
        to: data.to,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
