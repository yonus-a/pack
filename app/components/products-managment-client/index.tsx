"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import DeleteWithConform from "../delete-with-conform";
import useSelectAll from "@/hooks/useSelectAll";
import SearchFilter from "../search-filter";
import { useRouter } from "next/navigation";
import EditLinkBtn from "../edit-link-btn";
import Confirm from "../confirm";
import { useState } from "react";
import Alert from "../alert";
import "./styles.scss";

interface Props {
  prodcuts: any;
}

export default function ProductsManagmentClient({ prodcuts }: Props) {
  const [alert, setAlert] = useState<any>(null);
  const router = useRouter();

  const { isCheck, isCheckAll, handleSelect, handleSelectAll } =
    useSelectAll(prodcuts);

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
    <section className="prodcuts-managment-client">
      {alert && <Alert {...alert} />}
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
            <Th>کد یکتا</Th>
            <Th>نام</Th>
            <Th>دسته بندی</Th>
            <Th>واحد اندازه گیری</Th>
            <Th>نوع</Th>
            <Th>عملیات ها</Th>
          </Tr>
        </Thead>
        <Tbody>
          {prodcuts?.map((item: any, idx: number) => {
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
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.product_category?.name}</Td>
                <Td>{item.product_unit?.name}</Td>
                <Td>{item.product_type?.name}</Td>
                <Td className="g1">
                  <DeleteWithConform onOk={() => handleDelete([item.id])} />
                  <EditLinkBtn href={`/panel/edit-product/${item.id}`} />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </section>
  );
}
