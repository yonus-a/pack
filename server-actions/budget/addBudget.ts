"use server";

import prisma from "@/lib/prisma";

export default async function addBudget(data: any) {
  try {
    await prisma.budget.createMany({
      data: data.budgets.map(({ productId, months, year }: any) => ({
        productId: productId,
        branchId: +data.branch,
        date: data.date,
        year: +year,
        ...months.reduce((acc: any, val: any, idx: number) => {
          acc[`month${idx + 1}`] = +val;
          return acc;
        }, {}),
      })),
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
