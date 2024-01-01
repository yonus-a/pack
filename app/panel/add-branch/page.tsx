import AddBranchClient from "@/app/components/add-branch-client";
import { isAdmin } from "@/server-actions/permissions";
import Container from "@/app/components/container";
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
