import AddTruckClient from "@/app/components/truck/add-truck-client";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permission/permissions";
import { notFound } from "next/navigation";
import "./styles.scss";

export default async function AddTruck() {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  return (
    <Container>
      <AddTruckClient />
    </Container>
  );
}
