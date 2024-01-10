"use server";

import prisma from "@/lib/prisma";

export default async function editBudget(id: number, data: any) {
  try {
    return await prisma.budget.update({
      where: {
        id,
      },
      data: {
        year: +data.year,
        month1: +data.month1,
        month2: +data.month2,
        month3: +data.month3,
        month4: +data.month4,
        month5: +data.month5,
        month6: +data.month6,
        month7: +data.month7,
        month8: +data.month8,
        month9: +data.month9,
        month10: +data.month10,
        month11: +data.month11,
        month12: +data.month12,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
