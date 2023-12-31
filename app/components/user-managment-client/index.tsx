"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import DeleteWithConform from "../delete-with-conform";
import useSelectAll from "@/hooks/useSelectAll";
import SearchFilter from "../search-filter";
import { useRouter } from "next/navigation";
import EditLinkBtn from "../edit-link-btn";
import Confirm from "../confirm";
import { useState } from "react";
import "./styles.scss";

interface Props {
  users: any;
}

export default function UsersManagmentClient({ users }: Props) {
  const [alert, setAlert] = useState<any>(null);
  const router = useRouter();

  const { isCheck, isCheckAll, handleSelect, handleSelectAll } =
    useSelectAll(users);

  const handleDelete = async (ids: any) => {
    try {
      router.refresh();
    } catch (e) {
      setAlert({
        type: "error",
        msg: "مشکلی پیش آمده لطفا دوباره تلاش کنید !",
      });
    }
  };

  return (
    <section className="users-managment-client">
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
            <Th>نام</Th>
            <Th>فامیل</Th>
            <Th>کدملی</Th>
            <Th>سطح دسترسی</Th>
            <Th>شماره تماس</Th>
            <Th>شعبه</Th>
            <Th>عملیات ها</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((item: any, idx: number) => {
            return (
              <Tr key={item?.id}>
                <Td>
                  <input
                    type="checkbox"
                    id={item.id}
                    onClick={handleSelect}
                    checked={isCheck.includes(+item.id)}
                  />
                </Td>
                <Td>{idx + 1}</Td>
                <Td>{item.firstname}</Td>
                <Td>{item.lastname}</Td>
                <Td>{item.id}</Td>
                <Td>{item.permissions?.name}</Td>
                <Td>{item.phone}</Td>
                <Td>{item.branch?.name}</Td>
                <Td className="g1">
                  <DeleteWithConform onOk={() => handleDelete([item.id])} />
                  <EditLinkBtn href={`/panel/edit-user/${item.id}`} />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </section>
  );
}
