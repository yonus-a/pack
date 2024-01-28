import NextTablePagination from "@/app/components/general/next-table-pagination";
import AddLimitClient from "@/app/components/limit/limit-managment-client";
import filterProducts from "@/server-actions/product/filterProducts";
import { isAdmin } from "@/server-actions/permission/permissions";
import Container from "@/app/components/general/container";
import { notFound } from "next/navigation";
import "./styles.scss";

export default async function LimitManagment({ searchParams }: any) {
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
    <Container>
      <AddLimitClient products={products} />
      <NextTablePagination page={page} take={take} total={countProducts} />
    </Container>
  );
}
