"use server";

import prisma from "@/lib/prisma";

export default async function getProductCategories() {
  try {
    return await prisma.product_category.findMany({
      where: {
        parentId: null,
      },
      include: {
        other_product_category: {
          include: {
            other_product_category: {
              include: {
                other_product_category: {
                  include: {
                    other_product_category: {
                      include: {
                        other_product_category: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
