import BranchesManagmentClient from "@/app/components/branches-managment-client";
import NextTablePagination from "@/app/components/next-table-pagination";
import filterBranches from "@/server-actions/filterBranches";
import { isAdmin } from "@/server-actions/permissions";
import AddLinkBtn from "@/app/components/add-link-btn";
import Container from "@/app/components/container";
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
        <NextTablePagination
          total={countBranches}
          page={page}
          take={take}
          url={"/panel/users-managment"}
        />
      </Container>
    </main>
  );
}
