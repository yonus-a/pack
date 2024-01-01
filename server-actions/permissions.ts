"use server";

import { ADMIN_KEY, USER_KEY } from "@/utils/clientPermission";
import getPermission from "./getPermission";
import getSession from "./getSession";
import { compare } from "bcryptjs";

const ADMIN_PERMISSION = process.env.ADMIN_PERMISSION as string;
const USER_PERMISSION = process.env.USER_PERMISSION as string;

export const isRegister = async () => {
  const session = await getSession();
  return !!session;
};

export const isAdmin = async () => {
  const permission = await getPermission();
  return await compare(ADMIN_PERMISSION, permission);
};

export const isUser = async () => {
  const permission = await getPermission();
  return await compare(USER_PERMISSION, permission);
};

export async function generateClientPermission() {
  switch (true) {
    case await isAdmin():
      return ADMIN_KEY;
    case await isUser():
      return USER_KEY;
  }
}
