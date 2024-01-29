import getProductCategories from "@/server-actions/product/getProductCategories";
import AddProductClient from "@/app/components/product/add-product-client";
import getProductUnits from "@/server-actions/product/getProductUnits";
import getProductTypes from "@/server-actions/product/getProductTypes";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permission/permissions";
import { notFound } from "next/navigation";

export default async function AddProduct() {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const categories = await getProductCategories();
  const types = await getProductTypes();
  const units = await getProductUnits();


  return (
    <main>
      <Container>
        <AddProductClient categories={categories} types={types} units={units} />
      </Container>
    </main>
  );
}
