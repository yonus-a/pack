"use server";

import prisma from "@/lib/prisma";

export default async function addUser(data: any) {
  try {
    return await prisma.user.create({
      data: {
        permission: data.permission,
        firstname: data.firstname,
        lastname: data.lastname,
        branchId: +data.branch,
        phone: data.phone,
        id: data.idcard,
      },
    });
  } catch (e: any) {
    console.error(e);
    if (e.code === "P2002") {
      // only for id
      throw new Error("کاربر با این شماره ملی از قبل ساخته شده");
    }

    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
