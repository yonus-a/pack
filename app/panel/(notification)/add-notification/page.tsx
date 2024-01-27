import AddNotificationClient from "@/app/components/notification/add-notification-client";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permission/permissions";
import { notFound } from "next/navigation";

export default async function AddUser() {
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <AddNotificationClient />
      </Container>
    </main>
  );
}
