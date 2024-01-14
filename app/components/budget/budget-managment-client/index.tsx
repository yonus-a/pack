"use client";

import getProductsBaseBudgetFilter from "@/server-actions/product/getProductsBaseBudgetFilter";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import selectOptionsGenerator from "@/utils/selectOptionsGenerator";
import DeleteWithConform from "../../general/delete-with-conform";
import deleteBudget from "@/server-actions/budget/deleteBudget";
import NextDatePicker from "../../general/next-date-picker";
import NextMuiSelect from "../../general/next-mui-select";
import EqualizeItems from "../../general/equalize-items";
import EditLinkBtn from "../../general/edit-link-btn";
import { useMemo, useState } from "react";
import "./styles.scss";

interface Props {
  branches: any;
}

export default function BudgetInputs({ branches }: Props) {
  const branchesOption = selectOptionsGenerator(branches);
  const [selectedBranch, setSelectedBranch] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [product, setProduct] = useState<any>([]);

  useMemo(async () => {
    try {
      if (!selectedBranch) return false;

      const products = await getProductsBaseBudgetFilter({
        branchId: selectedBranch,
        date: selectedDate,
      });

      setProduct(products);
    } catch (e) {}
  }, [selectedBranch, selectedDate]);

  const handleDelete = async (id: number) => {
    try {
      await deleteBudget(id);
    } catch (e) {}
  };

  return (
    <>
      <EqualizeItems>
        <NextMuiSelect
          items={branchesOption}
          name="branch"
          label="شعبه"
          onChange={({ target }: any) => setSelectedBranch(target.value)}
        />
        <NextDatePicker
          handleChange={setSelectedDate}
          defaultValue={selectedDate}
          views={["year"]}
        />
      </EqualizeItems>
      <Table>
        <Thead>
          <Tr>
            <Th>ردیف</Th>
            <Th>کد یکتا</Th>
            <Th>نام</Th>
            <Th>بودجه سالیانه</Th>
            <Th>فروردین</Th>
            <Th>اردیبهشت</Th>
            <Th>خرداد</Th>
            <Th>تیر</Th>
            <Th>مرداد</Th>
            <Th>شهریور</Th>
            <Th>مهر</Th>
            <Th>آبان</Th>
            <Th>آذر</Th>
            <Th>دی</Th>
            <Th>بهمن</Th>
            <Th>اسفند</Th>
            <Th>عملیات ها</Th>
          </Tr>
        </Thead>
        <Tbody>
          {product?.map((item: any, idx: number) => {
            const budget = item.budget[0];

            return (
              <Tr key={item?.id}>
                <Td>{idx + 1}</Td>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{budget.year}</Td>
                <Td>{budget.month1}</Td>
                <Td>{budget.month2}</Td>
                <Td>{budget.month3}</Td>
                <Td>{budget.month4}</Td>
                <Td>{budget.month5}</Td>
                <Td>{budget.month6}</Td>
                <Td>{budget.month7}</Td>
                <Td>{budget.month8}</Td>
                <Td>{budget.month9}</Td>
                <Td>{budget.month10}</Td>
                <Td>{budget.month11}</Td>
                <Td>{budget.month12}</Td>
                <Td className="g1">
                  <EditLinkBtn href={`/panel/edit-budget/${item.id}`} />
                  <DeleteWithConform onOk={() => handleDelete(item.id)} />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
