"use server";

import prisma from "@/lib/prisma";

export default async function editBranch(id: number, data: any) {
  try {
    return await prisma.branch.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        province: data.province,
        city: data.city,
        address: data.address,
        distance_to_central_warehouse: data.distanceToCentralWarehouse,
        distance_to_factory: data.distanceToFactory,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
