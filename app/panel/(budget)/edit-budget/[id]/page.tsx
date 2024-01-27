import getProductAndBudgetBaseId from "@/server-actions/product/getProductAndBudgetBaseId";
import EditBudgetClient from "@/app/components/budget/edit-budget-client";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permission/permissions";
import { notFound } from "next/navigation";

export default async function EditBudget({ params }: any) {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const id = params.id;
  const product = await getProductAndBudgetBaseId(id);

  if (!product) {
    return notFound();
  }

  return (
    <main className="edit-budget">
      <Container>
        <EditBudgetClient product={product} />
      </Container>
    </main>
  );
}
