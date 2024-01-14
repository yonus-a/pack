"use server";

import prisma from "@/lib/prisma";

export default async function deleteUser(ids: any) {
  try {
    return Promise.all(
      ids.map((id: any) => {
        return prisma.user.update({
          where: { id },
          data: {
            deleted: 1,
            order: {
              updateMany: {
                where: {},
                data: {
                  deleted: 1,
                },
              },
            },
          },
        });
      })
    );
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
