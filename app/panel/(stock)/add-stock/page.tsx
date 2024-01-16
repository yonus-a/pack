import AddStockClient from "@/app/components/stock/add-stock-client";
import getProducts from "@/server-actions/product/getProducts";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permissions";
import { notFound } from "next/navigation";

export default async function AddStock() {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const products = await getProducts();

  return (
    <Container>
      <AddStockClient products={products} />
    </Container>
  );
}
