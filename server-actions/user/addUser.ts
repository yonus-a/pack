"use server";

import prisma from "@/lib/prisma";
import validate from "./validate";

export default async function addUser(data: any) {
  try {
    await validate(data);

    return await prisma.user.create({
      data: {
        branchId: data.branch ? +data.branch : undefined,
        permission: data.permission,
        firstname: data.firstname,
        lastname: data.lastname,
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

    throw new Error(e.message || "مشکلی در سرور به وجود آمده است !");
  }
}
