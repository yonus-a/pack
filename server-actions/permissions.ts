"use server";

import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

export const isRegister = async () => {
  const session = await getServerSession(authOptions);

  return !!session;
};

export const handleRegistration = async () => {
  const register = await isRegister();

  if (!register) {
    notFound();
  }
};
