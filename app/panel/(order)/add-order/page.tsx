import getAllProductsBaseFilter from "@/server-actions/product/getAllProductsBaseFilter";
import getProductCategories from "@/server-actions/product/getProductCategories";
import AddOrderClient from "@/app/components/order/add-order-client";
import { isAdmin, isRegister } from "@/server-actions/permissions";
import Container from "@/app/components/general/container";
import getUserId from "@/server-actions/general/getUserId";
import getUserById from "@/server-actions/getUserById";
import getStock from "@/server-actions/stock/getStock";
import getDate from "@/server-actions/general/getDate";
import getBranches from "@/server-actions/getBranches";
import { notFound } from "next/navigation";
import "./styles.scss";

export default async function Order({ searchParams }: any) {
  const register = await isRegister();
  const admin = await isAdmin();

  if (!register) {
    return notFound();
  }

  const stock = await getStock();
  const userId = await getUserId();
  const categories = await getProductCategories();
  const products = await getAllProductsBaseFilter(searchParams);
  const user = await getUserById(userId);
  const branches = await getBranches();
  const date = await getDate();

  return (
    <Container>
      <AddOrderClient
        branches={branches}
        defaultBranch={user?.branchId}
        categories={categories}
        products={products}
        isAdmin={admin}
        stock={stock}
        date={date}
      />
    </Container>
  );
}
