"use server";

import prisma from "@/lib/prisma";

export default async function addUser(data: any) {
    
  try {
    return await prisma.user.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        phone: data.phone,
        id: data.idcard,
        permission: 
      },
    });
  } catch (e) {
    console.error(e);
    return Promise.reject("مشکلی در سرور به وجود آمده است !");
  }
}
