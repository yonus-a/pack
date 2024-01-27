import EditUserClient from "@/app/components/user/edit-user-client";
import getPermissions from "@/server-actions/permission/getPermissions";
import { isAdmin } from "@/server-actions/permission/permissions";
import getBranches from "@/server-actions/branch/getBranches";
import Container from "@/app/components/general/container";
import getUserById from "@/server-actions/user/getUserById";
import { notFound } from "next/navigation";

export default async function EditUser({ params }: any) {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const id = params.id;
  const permissions = await getPermissions();
  const branches = await getBranches();
  const user = await getUserById(id);

  if (!user) {
    return notFound();
  }

  return (
    <main className="edit-user">
      <Container>
        <EditUserClient
          branches={branches}
          permissions={permissions}
          user={user}
        />
      </Container>
    </main>
  );
}
