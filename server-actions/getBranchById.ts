"use server";

import prisma from "@/lib/prisma";

export default async function getBranchById(id: number) {
  try {
    return await prisma.branch.findFirst({
      where: {
        id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
