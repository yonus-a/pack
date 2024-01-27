"use server";

import getSession from "../general/getSession";

export default async function getPermission() {
  const session: any = await getSession();
  return session?.user?.permission;
}
