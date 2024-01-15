import CheckOrderClient from "@/app/components/order/check-order-client";
import getOrderById from "@/server-actions/order/getOrderById";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permissions";
import { notFound } from "next/navigation";

export default async function CheckOrder({ params }: any) {
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const id = params.id;
  const order = await getOrderById(id);

  return (
    <Container>
      <CheckOrderClient order={order} />
    </Container>
  );
}
