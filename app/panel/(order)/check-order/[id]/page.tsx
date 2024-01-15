import Container from "@/app/components/general/container";
import CheckOrderClient from "@/app/components/order/check-order-client";
import getOrderById from "@/server-actions/order/getOrderById";

export default async function CheckOrder({ params }: any) {
  const id = params.id;

  const order = await getOrderById(id);

  return (
    <Container>
      <CheckOrderClient order={order} />
    </Container>
  );
}
