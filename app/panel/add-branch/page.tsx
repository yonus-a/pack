import AddBranchClient from "@/app/components/branch/add-branch-client";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permissions";
import { notFound } from "next/navigation";

export default async function AddUser() {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <AddBranchClient />
      </Container>
    </main>
  );
}
