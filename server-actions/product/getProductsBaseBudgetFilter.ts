"use server";

import prisma from "@/lib/prisma";
import { endOfMonth, startOfMonth } from "date-fns";

export default async function getProductsWithBudget({ date, branchId }: any) {
  const startMonth = startOfMonth(date);
  const endMonth = endOfMonth(date);

  try {
    return await prisma.product.findMany({
      where: {
        budget: {
          some: {
            branchId: +branchId,
            date: {
              gte: startMonth,
              lte: endMonth,
            },
          },
        },
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
