"use server";

import prisma from "@/lib/prisma";
import filterUsersBaseSearch from "@/utils/filterUsersBaseSearch";

export default async function filterUsers({ page, take, searchParams }: any) {
  try {
    const { search } = searchParams;

    const filter = {
      ...filterUsersBaseSearch(search),
      deleted: 0,
    };

    const users = await prisma.user.findMany({
      take,
      skip: page * take,
      where: filter,
      include: {
        branch: true,
        permissions: true,
      },
    });

    const countUsers = await prisma.user.count({
      where: filter,
    });

    return {
      users,
      countUsers,
    };
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
