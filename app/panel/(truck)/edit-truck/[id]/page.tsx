import getProductTypes from "@/server-actions/product/getProductTypes";
import EditTruckClient from "@/app/components/truck/edit-truck-client";
import getTruckById from "@/server-actions/truck/getTruckById";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permission/permissions";
import { notFound } from "next/navigation";
import "./styles.scss";

export default async function AddTruck({ params }: any) {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const id = +params.id;
  const truck = await getTruckById(id);

  return (
    <Container>
      <EditTruckClient truck={truck} />
    </Container>
  );
}
