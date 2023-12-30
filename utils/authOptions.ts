import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { compare } from "bcryptjs";
import prisma from "@/lib/prisma";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any, req: any): Promise<any> {
        const { idcard, otp } = credentials;

        if (!idcard) {
          throw new Error("لطفا کد ملی را وارد کنید");
        }

        if (!otp) {
          throw new Error("لطفا رمز را وارد کنید");
        }

        //  get otp
        const savedOTP = await prisma.otp.findFirst({
          where: {
            id: idcard,
          },
        });

        if (!savedOTP) {
          throw new Error("مشکلی پیش آمده لطفا مجددا تلاش کنید");
        }

        // compear otp
        const OTPMath = await compare(otp, savedOTP?.otp);

        if (!OTPMath) {
          throw new Error("رمز اشتباه است");
        }

        // delete otp
        await prisma.otp.deleteMany({
          where: {
            id: idcard,
          },
        });

        return {};
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
