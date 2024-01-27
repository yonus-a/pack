"use server";

import prisma from "@/lib/prisma";
import sendOTP from "./sendOTP";
import { hash } from "bcryptjs";
import crypto from "crypto";

export default async function generateOTP(idcard: string) {
  try {
    const mabyUser = await prisma.user.findFirst({
      where: {
        id: idcard,
      },
    });

    if (mabyUser) {
      // const otp = crypto.randomInt(11, 99).toString();
      const otp = "10";
      const phone = mabyUser.phone;

      // send otp sms
      // const res = await sendOTP(phone, otp);

      // delete all otp for user
      await prisma.otp.deleteMany({
        where: {
          id: idcard,
        },
      });

      const hashedOTP = await hash(otp, 10);

      // save otp to db
      await prisma.otp.create({
        data: {
          id: idcard,
          otp: hashedOTP,
        },
      });

      return Promise.resolve(true);
    } else {
      throw new Error("کاربری با این کد ملی یافت نشد");
    }
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
