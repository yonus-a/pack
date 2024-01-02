"use server";

import prisma from "@/lib/prisma";

export default async function addNotification(data: any) {
  try {
    return prisma.notification.create({
      data: {
        title: data.title,
        msg: data.msg,
        sendSms: +data.sendSms,
        createdAt: new Date(),
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
