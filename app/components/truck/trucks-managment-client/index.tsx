"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import DeleteWithConform from "../../general/delete-with-conform";
import deleteTruck from "@/server-actions/truck/deleteTruck";
import SearchFilter from "../../general/search-filter";
import EditLinkBtn from "../../general/edit-link-btn";
import { useRouter } from "next/navigation";
import "./styles.scss";

interface Props {
  trucks: any;
}

export default function TrucksManagmentClient({ trucks }: Props) {
  const router = useRouter();

  const handleDelete = async (id: number) => {
    try {
      await deleteTruck(id);
      router.refresh();
    } catch (e) {}
  };

  return (
    <section className="trucks-managment">
      <h2>مدیریت کامیون ها</h2>
      <SearchFilter />
      <Table>
        <Thead>
          <Tr>
            <Th>نام</Th>
            <Th>تناز</Th>
            <Th>زمان ایجاد</Th>
            <Th>عملیات ها</Th>
          </Tr>
        </Thead>
        <Tbody>
          {trucks.map((item: any) => (
            <Tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>{item.tonnage}</Td>
              <Td>{item.createdAt.toLocaleString()}</Td>
              <Td className="g1">
                <DeleteWithConform onOk={() => handleDelete(item.id)} />
                <EditLinkBtn href={`/panel/edit-truck/${item.id}`} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </section>
  );
}
