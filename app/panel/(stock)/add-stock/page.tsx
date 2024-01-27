import getAllProductsBaseFilter from "@/server-actions/product/getAllProductsBaseFilter";
import getProductCategories from "@/server-actions/product/getProductCategories";
import AddStockClient from "@/app/components/stock/add-stock-client";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permission/permissions";
import { notFound } from "next/navigation";
import "../../index";

export default async function AddStock({ searchParams }: any) {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const products = await getAllProductsBaseFilter(searchParams);
  const categories = await getProductCategories();

  return (
    <Container>
      <AddStockClient products={products} categories={categories} />
    </Container>
  );
}
