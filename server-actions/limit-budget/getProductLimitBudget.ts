"use server";

import prisma from "@/lib/prisma";

export default async function getProductLimitBudget(id: any) {
  try {
    return await prisma.product.findMany({
      where: {
        id,
      },
      include: {
        limit_budget: {
          include: {
            branch: {
              select: {
                id: true,
              },
            },
          },
        },
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
