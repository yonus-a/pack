import getAllProductsBaseFilter from "@/server-actions/product/getAllProductsBaseFilter";
import getProductCategories from "@/server-actions/product/getProductCategories";
import AddOrderClient from "@/app/components/order/add-order-client";
import { isAdmin, isRegister } from "@/server-actions/permissions";
import Container from "@/app/components/general/container";
import getStock from "@/server-actions/stock/getStock";
import getDate from "@/server-actions/general/getDate";
import { notFound } from "next/navigation";
import "./styles.scss";

export default async function Order({ searchParams }: any) {
  const register = isRegister();
  const admin = isAdmin();

  if (!register) {
    return notFound();
  }

  const stock = await getStock();
  const categories = await getProductCategories();
  const products = await getAllProductsBaseFilter(searchParams);
  const date = await getDate();
  
  return (
    <Container>
      <AddOrderClient
        categories={categories}
        products={products}
        isAdmin={admin}
        stock={stock}
        date={date}
      />
    </Container>
  );
}
