"use server";

import prisma from "@/lib/prisma";

export default async function getPermissions() {
  try {
    return await prisma.permissions.findMany({});
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
