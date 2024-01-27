"use server";

import prisma from "@/lib/prisma";

export default async function addBranch(data: any) {
  try {
    return await prisma.branch.create({
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
    return Promise.reject("مشکلی در سرور به وجود آمده است !");
  }
}
