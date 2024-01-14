"use server";

import prisma from "@/lib/prisma";

export default async function getUser(id: string) {
  try {
    return await prisma.user.findFirst({
      where: {
        id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
