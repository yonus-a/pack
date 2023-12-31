import BranchesManagmentClient from "@/app/components/branches-managment-client";
import filterBranches from "@/server-actions/filterBranches";
import AddLinkBtn from "@/app/components/add-link-btn";
import Container from "@/app/components/container";
import "./styles.scss";

export default async function BranchesManagment({ searchParams }: any) {
  const page = +searchParams.page || 0;
  const take = +searchParams.take || 20;

  const { branches, countBranches } = await filterBranches({
    page,
    take,
    searchParams,
  });

  return (
    <main>
      <Container>
        <AddLinkBtn href={"/panel/add-branch"}>اضافه کردن</AddLinkBtn>
        <BranchesManagmentClient branches={branches} />
      </Container>
    </main>
  );
}
