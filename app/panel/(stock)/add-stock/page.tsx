import AddStockClient from "@/app/components/stock/add-stock";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permissions";
import getStock from "@/server-actions/stock/getStock";
import { notFound } from "next/navigation";

export default async function AddStock() {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const stock = await getStock();

  return (
    <Container>
      <AddStockClient currentAmount={stock?.amount || 0} />
    </Container>
  );
}
