"use server";

import prisma from "@/lib/prisma";
import filterBranchesBaseSearch from "@/utils/filterBranchesBaseSearch";

export default async function filterBranches({
  page,
  take,
  searchParams,
}: any) {
  try {
    const { search } = searchParams;

    const filter = {
      ...filterBranchesBaseSearch(search),
    };

    const branches = await prisma.branch.findMany({
      take,
      skip: page * take,
      where: filter,
    });

    const countBranches = await prisma.branch.count({
      where: filter,
    });

    return {
      branches,
      countBranches,
    };
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
