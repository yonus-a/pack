"use server";

import filterProductsBaseSearch from "@/utils/product/filterProductsBaseSearch";
import filterProductsBaseCategory from "@/utils/product/filterProductBaseCategory";
import prisma from "@/lib/prisma";

export default async function getAllProductsBaseFilter(searchParams: any) {
  try {
    const { search, category } = searchParams;

    const filter = {
      ...filterProductsBaseSearch(search),
      ...filterProductsBaseCategory(category),
    };

    return await prisma.product.findMany({
      where: filter,
      include: {
        product_category: true,
        product_type: true,
        product_unit: true,
        budget: true,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
