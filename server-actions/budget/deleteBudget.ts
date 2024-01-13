"use server";

import prisma from "@/lib/prisma";

export default async function deleteBudget(id: number) {
  try {
    return await prisma.budget.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
