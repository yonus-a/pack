import AddUserClient from "@/app/components/add-user-client";
import getPermissions from "@/server-actions/getPermissions";
import getBranches from "@/server-actions/getBranches";
import { isAdmin } from "@/server-actions/permissions";
import Container from "@/app/components/container";
import { notFound } from "next/navigation";

export default async function AddUser() {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

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
