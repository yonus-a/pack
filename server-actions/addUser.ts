"use server";

import prisma from "@/lib/prisma";
import getHashedPermission from "./getHashedPermission";

export default async function addUser(data: any) {
  const hashedPermission: any = await getHashedPermission(+data.permission);

  try {
    return await prisma.user.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        phone: data.phone,
        id: data.idcard,
        permission: hashedPermission,
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
