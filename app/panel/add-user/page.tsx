import AddUserClient from "@/app/components/add-user-client";
import getPermissions from "@/server-actions/getPermissions";
import getBranches from "@/server-actions/getBranches";
import Container from "@/app/components/container";

export default async function AddUser() {
  const branches = await getBranches();
  const permissions = await getPermissions();

  return (
    <main>
      <Container>
        <AddUserClient branches={branches} permissions={permissions} />
      </Container>
    </main>
  );
}
