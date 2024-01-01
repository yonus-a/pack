"use server";

import prisma from "@/lib/prisma";

export default async function getProductTypes() {
  try {
    return await prisma.product_type.findMany({
      orderBy: {
        id: "desc",
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
