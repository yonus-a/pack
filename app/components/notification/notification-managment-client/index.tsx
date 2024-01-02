"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import DeleteWithConform from "../../general/delete-with-conform";
import SearchFilter from "../../general/search-filter";
import EditLinkBtn from "../../general/edit-link-btn";
import useSelectAll from "@/hooks/useSelectAll";
import { useRouter } from "next/navigation";
import Confirm from "../../general/confirm";
import { useState } from "react";
import "./styles.scss";

interface Props {
  notifs: any;
}

export default function NotificationManagmentClient({ notifs }: Props) {
  const [alert, setAlert] = useState<any>(null);
  const router = useRouter();

  const { isCheck, isCheckAll, handleSelect, handleSelectAll } =
    useSelectAll(notifs);

  const handleDelete = async (ids: any) => {
    try {
      // todo
      router.refresh();
    } catch (e) {
      setAlert({
        type: "error",
        msg: "مشکلی پیش آمده لطفا دوباره تلاش کنید !",
      });
    }
  };

  return (
    <section className="announcment-managment-client">
      <div className="g1">
        <SearchFilter />
        <Confirm
          className="btn"
          onOk={() => handleDelete(isCheck)}
          disabled={!isCheck.length}
        >
          حذف
        </Confirm>
      </div>
      <Table>
        <Thead>
          <Tr>
            <Th>
              <input
                type="checkbox"
                checked={isCheckAll}
                onClick={handleSelectAll}
              />
            </Th>
            <Th>ردیف</Th>
            <Th>عملیات ها</Th>
          </Tr>
        </Thead>
        <Tbody>
          {notifs?.map((item: any, idx: number) => {
            return (
              <Tr key={item?.id}>
                <Td>
                  <input
                    type="checkbox"
                    id={item.id}
                    onClick={handleSelect}
                    checked={isCheck.includes(item.id)}
                  />
                </Td>
                <Td>{idx + 1}</Td>
                <Td className="g1">
                  <DeleteWithConform onOk={() => handleDelete([item.id])} />
                  <EditLinkBtn href={`/panel/edit-branch/${item.id}`} />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </section>
  );
}
