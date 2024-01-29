import getAllProductsBaseFilter from "@/server-actions/product/getAllProductsBaseFilter";
import getProductCategories from "@/server-actions/product/getProductCategories";
import AddOrderClient from "@/app/components/order/add-order-client";
import { isRegister } from "@/server-actions/permission/permissions";
import getBranches from "@/server-actions/branch/getBranches";
import getUserById from "@/server-actions/user/getUserById";
import Container from "@/app/components/general/container";
import getUserId from "@/server-actions/general/getUserId";
import getDate from "@/server-actions/general/getDate";
import { notFound } from "next/navigation";
import "./styles.scss";

export default async function Order({ searchParams }: any) {
  const register = await isRegister();

  if (!register) {
    return notFound();
  }

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
        date={date}
      />
    </Container>
  );
}
