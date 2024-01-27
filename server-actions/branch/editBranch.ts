"use server";

import prisma from "@/lib/prisma";
import addBranchToArchive from "./addBranchToArchive";

export default async function editBranch(id: number, data: any) {
  try {
    // archive current branch
    await addBranchToArchive(id);

    return await prisma.branch.update({
      where: {
        id,
      },
      data: {
        distance_to_central_warehouse: data.distanceToCentralWarehouse,
        distance_to_factory: data.distanceToFactory,
        province: data.province,
        address: data.address,
        name: data.name,
        city: data.city,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
