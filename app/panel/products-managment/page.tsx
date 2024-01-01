import ProductsManagmentClient from "@/app/components/products-managment-client";
import NextTablePagination from "@/app/components/next-table-pagination";
import filterProducts from "@/server-actions/product/filterProducts";
import { isAdmin } from "@/server-actions/permissions";
import AddLinkBtn from "@/app/components/add-link-btn";
import Container from "@/app/components/container";
import { notFound } from "next/navigation";

export default async function ProductsManagment({ searchParams }: any) {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const take = +searchParams.take || 20;
  const page = +searchParams.page || 0;

  const { products, countProducts } = await filterProducts({
    searchParams,
    page,
    take,
  });

  return (
    <main>
      <Container>
        <AddLinkBtn href={"/panel/add-product"}>اضافه کردن</AddLinkBtn>
        <ProductsManagmentClient prodcuts={products} />
        <NextTablePagination
          total={10}
          page={page}
          take={take}
          url={"/panel/users-managment"}
        />
      </Container>
    </main>
  );
}
