import getProductCategories from "@/server-actions/product/getProductCategories";
import EditProductClient from "@/app/components/product/edit-product-client";
import getProductUnits from "@/server-actions/product/getProductUnits";
import getProductTypes from "@/server-actions/product/getProductTypes";
import getProduct from "@/server-actions/product/getProductById";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permission/permissions";
import { notFound } from "next/navigation";

export default async function EditProduct({ params }: any) {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const id = params.id;
  const categories = await getProductCategories();
  const product = await getProduct(id);
  const types = await getProductTypes();
  const units = await getProductUnits();

  if (!product) {
    return notFound();
  }

  return (
    <main className="edit-product">
      <Container>
        <EditProductClient
          categories={categories}
          product={product}
          units={units}
          types={types}
        />
      </Container>
    </main>
  );
}
