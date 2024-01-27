"use server";

import prisma from "@/lib/prisma";

export default async function addUserToArchive(id: string) {
  try {
    // current user
    const data = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!data) return false;

    return await prisma.user_archive.create({
      data: {
        permission: data.permission,
        firstname: data.firstname,
        branchId: data.branchId,
        lastname: data.lastname,
        phone: data.phone,
        referId: data.id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
