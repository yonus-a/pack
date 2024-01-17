"use server";

import prisma from "@/lib/prisma";
import validate from "./validate";

export default async function editUser(id: string, data: any) {
  try {
    await validate(data);

    return await prisma.user.update({
      where: {
        id,
      },
      data: {
        permission: data.permission,
        firstname: data.firstname,
        lastname: data.lastname,
        branchId: data.branch ? +data.branch : null,
        phone: data.phone,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
