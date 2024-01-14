import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permissions";
import { notFound } from "next/navigation";
import "./styles.scss";

export default async function OrderManagment() {
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  return <Container>
    
  </Container>;
}
