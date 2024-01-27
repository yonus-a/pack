import TrucksManagmentClient from "@/app/components/truck/trucks-managment-client";
import NextTablePagination from "@/app/components/general/next-table-pagination";
import AddLinkBtn from "@/app/components/general/add-link-btn";
import filterTrucks from "@/server-actions/truck/filterTrucks";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permission/permissions";
import { notFound } from "next/navigation";
import "./styles.scss";

export default async function TrucksManagments({ searchParams }: any) {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const take = +searchParams.take || 20;
  const page = +searchParams.page || 0;
  const { trucks, countTrucks } = await filterTrucks({
    searchParams,
    page,
    take,
  });

  return (
    <Container>
      <AddLinkBtn href="/panel/add-truck">اضافه کردن</AddLinkBtn>
      <TrucksManagmentClient trucks={trucks} />
      <NextTablePagination total={countTrucks} page={page} take={take} />
    </Container>
  );
}
