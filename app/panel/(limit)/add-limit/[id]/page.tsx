import getProductLimitBudget from "@/server-actions/limit-budget/getProductLimitBudget";
import AddLimitCLient from "@/app/components/limit/add-limit-client";
import { isAdmin } from "@/server-actions/permission/permissions";
import getBranches from "@/server-actions/branch/getBranches";
import Container from "@/app/components/general/container";
import { notFound } from "next/navigation";
import "./styles.scss";

export default async function addLimitBudget({ params }: any) {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const productId = params.id;
  const branches = await getBranches();
  const products = await getProductLimitBudget(productId);

  return (
    <Container>
      <AddLimitCLient
        branches={branches}
        productId={productId}
        product={products[0]}
      />
    </Container>
  );
}
