import BudgetManagmentClient from "@/app/components/budget/budget-managment-client";
import { isAdmin } from "@/server-actions/permission/permissions";
import AddLinkBtn from "@/app/components/general/add-link-btn";
import getBranches from "@/server-actions/branch/getBranches";
import Container from "@/app/components/general/container";
import { notFound } from "next/navigation";

export default async function BudgetManagment({ searchParams }: any) {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const branches = await getBranches();

  return (
    <main>
      <Container>
        <AddLinkBtn href={"/panel/add-budget"}>اضافه کردن</AddLinkBtn>
        <BudgetManagmentClient branches={branches} />
      </Container>
    </main>
  );
}
