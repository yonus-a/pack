"use server";

import prisma from "@/lib/prisma";
import filterProductsBaseSearch from "@/utils/product/filterProductsBaseSearch";

export default async function filterProducts({
  searchParams,
  page,
  take,
}: any) {
  try {
    const { search } = searchParams;

    const filter = {
      ...filterProductsBaseSearch(search),
    };

    const products = await prisma.product.findMany({
      take,
      skip: page * take,
      where: filter,
      include: {
        product_category: true,
        product_stock: true,
        product_type: true,
        product_unit: true,
        budget: true,
      },
    });

    const countProducts = await prisma.product.count({
      where: filter,
    });

    return {
      products,
      countProducts,
    };
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
