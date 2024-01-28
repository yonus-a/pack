import AddBudgetClient from "@/app/components/budget/add-budget-client";
import Container from "@/app/components/general/container";
import getBranches from "@/server-actions/branch/getBranches";
import { isAdmin } from "@/server-actions/permission/permissions";
import { notFound } from "next/navigation";

export default async function AddUser() {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const branches = await getBranches();

  return (
    <main>
      <Container>
        <AddBudgetClient branches={branches} />
      </Container>
    </main>
  );
}
