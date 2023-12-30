import AddLinkBtn from "@/app/components/add-link-btn";
import Container from "@/app/components/container";

export default function UsersManagment() {
  return (
    <main>
      <Container>
        <AddLinkBtn href={"/panel/add-user"}>اضافه کردن</AddLinkBtn>
        {/* table */}
      </Container>
    </main>
  );
}
