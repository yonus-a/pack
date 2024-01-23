import getAllProductsBaseFilter from "@/server-actions/product/getAllProductsBaseFilter";
import AddBranchOrederClient from "@/app/components/order/add-branch-order-client";
import getProductCategories from "@/server-actions/product/getProductCategories";
import { isRegister } from "@/server-actions/permissions";
import Container from "@/app/components/general/container";
import getUserId from "@/server-actions/general/getUserId";
import getUserById from "@/server-actions/getUserById";
import getDate from "@/server-actions/general/getDate";
import getBranches from "@/server-actions/getBranches";
import { notFound } from "next/navigation";
import "./styles.scss";

export default async function Order({ searchParams }: any) {
  const register = await isRegister();

  if (!register) {
    return notFound();
  }

  const products = await getAllProductsBaseFilter(searchParams);
  const categories = await getProductCategories();
  const userId = await getUserId();
  const user = await getUserById(userId);
  const branches = await getBranches();
  const date = await getDate();

  return (
    <Container>
      <AddBranchOrederClient
        branches={branches}
        defaultBranch={user?.branchId}
        categories={categories}
        products={products}
        date={date}
      />
    </Container>
  );
}
