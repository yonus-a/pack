"use server";

import prisma from "@/lib/prisma";

export default async function addBranchToArchive(id: number) {
  try {
    const branch = await prisma.branch.findFirst({
      where: {
        id,
      },
    });

    if (!branch) return false;

    return await prisma.branch_archive.create({
      data: {
        distance_to_central_warehouse: branch.distance_to_central_warehouse,
        distance_to_factory: branch.distance_to_factory,
        province: branch.province,
        address: branch.address,
        name: branch.name,
        city: branch.city,
        referId: id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
