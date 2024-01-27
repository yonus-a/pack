"use server";

import prisma from "@/lib/prisma";

export default async function (ids: any) {
  try {
    return await prisma.branch.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
