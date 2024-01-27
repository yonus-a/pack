import BranchesManagmentClient from "@/app/components/branch/branches-managment-client";
import NextTablePagination from "@/app/components/general/next-table-pagination";
import filterBranches from "@/server-actions/branch/filterBranches";
import { isAdmin } from "@/server-actions/permission/permissions";
import AddLinkBtn from "@/app/components/general/add-link-btn";
import Container from "@/app/components/general/container";
import { notFound } from "next/navigation";

export default async function BranchesManagment({ searchParams }: any) {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const take = +searchParams.take || 20;
  const page = +searchParams.page || 0;

  const { branches, countBranches } = await filterBranches({
    searchParams,
    page,
    take,
  });

  return (
    <main>
      <Container>
        <AddLinkBtn href={"/panel/add-branch"}>اضافه کردن</AddLinkBtn>
        <BranchesManagmentClient branches={branches} />
        <NextTablePagination total={countBranches} page={page} take={take} />
      </Container>
    </main>
  );
}
