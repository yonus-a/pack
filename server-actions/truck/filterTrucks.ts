"use server";

import prisma from "@/lib/prisma";
import filterTrucksBaseSearch from "@/utils/truck/filterTrucksBaseSearch";

export default async function filterTrucks({ searchParams, page, take }: any) {
  try {
    const { search } = searchParams;

    const filters = {
      ...filterTrucksBaseSearch(search),
    };

    const trucks = await prisma.truck.findMany({
      take,
      skip: page * take,
      where: filters,
    });

    const countTrucks = await prisma.truck.count({
      where: filters,
    });

    return {
      trucks,
      countTrucks,
    };
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
