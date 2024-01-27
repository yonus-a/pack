"use server";

import prisma from "@/lib/prisma";

export default async function getBranches() {
  try {
    return await prisma.branch.findMany({});
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
