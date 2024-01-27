import BudgetManagmentClient from "@/app/components/budget/budget-managment-client";
import AddLinkBtn from "@/app/components/general/add-link-btn";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permission/permissions";
import getBranches from "@/server-actions/getBranches";
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
