"use server";

import prisma from "@/lib/prisma";

export default async function upsertLimitBudget(id: number, data: any) {
  try {
    const options = {
      permement: +data.permement,
      productId: data.productId,
      limit: +data.limit,
      from: data.from,
      to: data.to,
      branch: {
        connect: JSON.parse(data.branch),
      },
    };

    return await prisma.limit_budget.upsert({
      where: {
        id: +id || 0,
      },
      create: options,
      update: options,
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
