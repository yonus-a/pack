"use server";

import { hash } from "bcryptjs";

export default async function getHashedPermission(permission: number) {
  const adminKey = process.env.ADMIN_KEY;
  const userKey = process.env.ADMIN_KEY;

  switch (permission) {
    case 1:
      return await hash(adminKey as string, 10);
    case 2:
      return await hash(userKey as string, 10);
  }
}
