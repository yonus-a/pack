import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import "./styles.scss";

interface Props {
  orders: any;
}

export default function ({ orders }: Props) {
  return (
    <div className="div">
      <h2>مدیریت سفارشات</h2>
      <Table>
        <Thead>
          <Tr>
            <Th>*</Th>
            <Th>شناسه محصول</Th>
            <Th>عنوان محصول</Th>
            <Th>بودجه ماهیانه</Th>
            <Th>بودجه روز</Th>
            <Th>موجودی</Th>
            <Th>وزن</Th>
            <Th>ضریب</Th>
            <Th>نوع سنجش</Th>
            <Th>تعداد</Th>
            <Th>وزن کل</Th>
            <Th>پیشنهادی</Th>
            <Th>پیشنهادی</Th>
          </Tr>
        </Thead>
      </Table>
    </div>
  );
}
