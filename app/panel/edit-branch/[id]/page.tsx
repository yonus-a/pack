import EditBranchClient from "@/app/components/edit-branch-client";
import getBranchById from "@/server-actions/getBranchById";
import { isAdmin } from "@/server-actions/permissions";
import Container from "@/app/components/container";
import { notFound } from "next/navigation";

export default async function EditBranch({ params }: any) {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const id = +params.id;
  const branch = await getBranchById(id);

  if (!branch) {
    return notFound();
  }

  return (
    <main className="edit-branch">
      <Container>
        <EditBranchClient branch={branch} />
      </Container>
    </main>
  );
}
