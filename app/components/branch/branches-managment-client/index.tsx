"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import DeleteWithConform from "../../general/delete-with-conform";
import deleteBranches from "@/server-actions/deleteBranches";
import SearchFilter from "../../general/search-filter";
import EditLinkBtn from "../../general/edit-link-btn";
import useSelectAll from "@/hooks/useSelectAll";
import { useRouter } from "next/navigation";
import Confirm from "../../general/confirm";
import { useState } from "react";
import "./styles.scss";

interface Props {
  branches: any;
}

export default function BranchesManagmentClient({ branches }: Props) {
  const [alert, setAlert] = useState<any>(null);
  const router = useRouter();

  const { isCheck, isCheckAll, handleSelect, handleSelectAll } =
    useSelectAll(branches);

  const handleDelete = async (ids: any) => {
    try {
      await deleteBranches(ids);
      router.refresh();
    } catch (e) {
      setAlert({
        type: "error",
        msg: "مشکلی پیش آمده لطفا دوباره تلاش کنید !",
      });
    }
  };

  return (
    <section className="branches-managment-client">
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
            <Th>استان</Th>
            <Th>شهر</Th>
            <Th>آدرس</Th>
            <Th>فاصله تا انبار مرکزی</Th>
            <Th>فاصله تا کارخانه</Th>
            <Th>عملیات ها</Th>
          </Tr>
        </Thead>
        <Tbody>
          {branches?.map((item: any, idx: number) => {
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
                <Td>{item.name}</Td>
                <Td>{item.province}</Td>
                <Td>{item.city}</Td>
                <Td>{item.address}</Td>
                <Td>{item.distance_to_central_warehouse}</Td>
                <Td>{item.distance_to_factory}</Td>
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
