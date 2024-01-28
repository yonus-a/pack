"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import SearchFilter from "../../general/search-filter";
import { useRouter } from "next/navigation";
import "./styles.scss";

interface Props {
  products: any;
}

export default function LimitManagmentClient({ products }: Props) {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/panel/add-limit/${id}`);
  };

  return (
    <section className="add-limit-client" aria-label="add limit">
      <SearchFilter />
      <Table>
        <Thead>
          <Tr>
            <Th>ردیف</Th>
            <Th>کد یکتا</Th>
            <Th>نام</Th>
            <Th>بودجه</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((item: any, idx: number) => (
            <Tr className="clickable" onClick={() => handleClick(item.id)}>
              <Td>{idx + 1}</Td>
              <Td>{item.id}</Td>
              <Td>{item.name}</Td>
              <Td>{item.product_stock[0]?.amount}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </section>
  );
}
