import ProductsManagmentClient from "@/app/components/product/products-managment-client";
import NextTablePagination from "@/app/components/general/next-table-pagination";
import filterProducts from "@/server-actions/product/filterProducts";
import AddLinkBtn from "@/app/components/general/add-link-btn";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permissions";
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
        <NextTablePagination total={countProducts} page={page} take={take} />
      </Container>
    </main>
  );
}
