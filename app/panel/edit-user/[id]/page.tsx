import EditUserClient from "@/app/components/edit-user-client";
import getPermissions from "@/server-actions/getPermissions";
import getBranches from "@/server-actions/getBranches";
import getUserById from "@/server-actions/getUserById";
import Container from "@/app/components/container";
import { notFound } from "next/navigation";

export default async function EditUser({ params }: any) {
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
