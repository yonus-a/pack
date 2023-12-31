import UsersManagmentClient from "@/app/components/user-managment-client";
import AddLinkBtn from "@/app/components/add-link-btn";
import filterUsers from "@/server-actions/filterUsers";
import Container from "@/app/components/container";

export default async function UsersManagment({ searchParams }: any) {
  const page = +searchParams.page || 0;
  const take = +searchParams.take || 20;

  const { users, countUsers } = await filterUsers({
    page,
    take,
    searchParams,
  });

  return (
    <main>
      <Container>
        <AddLinkBtn href={"/panel/add-user"}>اضافه کردن</AddLinkBtn>
        <UsersManagmentClient users={users} />
      </Container>
    </main>
  );
}
