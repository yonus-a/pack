import UsersManagmentClient from "@/app/components/user/user-managment-client";
import NextTablePagination from "@/app/components/general/next-table-pagination";
import AddLinkBtn from "@/app/components/general/add-link-btn";
import Container from "@/app/components/general/container";
import filterUsers from "@/server-actions/filterUsers";
import { isAdmin } from "@/server-actions/permissions";
import { notFound } from "next/navigation";

export default async function UsersManagment({ searchParams }: any) {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const take = +searchParams.take || 20;
  const page = +searchParams.page || 0;

  const { users, countUsers } = await filterUsers({
    searchParams,
    page,
    take,
  });

  return (
    <main>
      <Container>
        <AddLinkBtn href={"/panel/add-user"}>اضافه کردن</AddLinkBtn>
        <UsersManagmentClient users={users} />
        <NextTablePagination
          url={"/panel/users-managment"}
          total={countUsers}
          page={page}
          take={take}
        />
      </Container>
    </main>
  );
}
