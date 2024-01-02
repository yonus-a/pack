import NextTablePagination from "@/app/components/general/next-table-pagination";
import AddLinkBtn from "@/app/components/general/add-link-btn";
import Container from "@/app/components/general/container";
import { isAdmin } from "@/server-actions/permissions";
import { notFound } from "next/navigation";

export default async function ProductsManagment({ searchParams }: any) {
  // check permission
  const admin = await isAdmin();

  if (!admin) {
    return notFound();
  }

  const take = +searchParams.take || 20;
  const page = +searchParams.page || 0;

  // const { products, countProducts } = await filterProducts({
  //   searchParams,
  //   page,
  //   take,
  // });

  return (
    <main>
      <Container>
        <AddLinkBtn href={"/panel/add-notification"}>اضافه کردن</AddLinkBtn>
        
        <NextTablePagination
          total={10}
          page={page}
          take={take}
          url={"/panel/notification-managment"}
        />
      </Container>
    </main>
  );
}
