"use server";

import prisma from "@/lib/prisma";
import { endOfYear, startOfYear } from "date-fns";

export default async function getProductsWithBudget({ date, branchId }: any) {
  const startYear = startOfYear(date);
  const endYear = endOfYear(date);

  try {
    return await prisma.product.findMany({
      where: {
        budget: {
          some: {
            branchId: branchId ? +branchId : undefined,
            date: {
              gte: startYear,
              lte: endYear,
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
