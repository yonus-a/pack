import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import selectOptionsGenerator from "@/utils/selectOptionsGenerator";
import getProducts from "@/server-actions/product/getProducts";
import NextDatePicker from "../../general/next-date-picker";
import NextMuiSelect from "../../general/next-mui-select";
import EqualizeItems from "../../general/equalize-items";
import { TextField } from "@mui/material";
import { useMemo, useState } from "react";
import "./styles.scss";

interface Props {
  register: any;
  branches: any;
  setValue: any;
}

export default function BudgetInputs({ branches, register, setValue }: Props) {
  const branchesOption = selectOptionsGenerator(branches);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [product, setProduct] = useState<any>([]);

  useMemo(async () => {
    try {
      if (!selectedBranch) return false;

      const products = await getProducts();
      setValue("date", selectedDate, { shouldValidate: true });
      setProduct(products);
    } catch (e) {}
  }, [selectedDate, selectedBranch]);

  const handleYearChnage = (id: number, { target }: any) => {
    const value = target.value;
    const result = Math.floor(+value / 12);

    // create an array [12, 10, 1...]
    for (let i = 0; i < 12; i++) {
      setValue(`budgets.${id}.months.${i}`, result);
    }

    setValue(`budgets.${id}.year`, value, {
      shouldValidate: true,
    });
  };

  const handleBranchChange = ({ target }: any) => {
    const value = target.value;
    setSelectedBranch(value);
    setValue("branch", value);
  };

  return (
    <>
      <EqualizeItems>
        <NextMuiSelect
          items={branchesOption}
          onChange={handleBranchChange}
          label="شعبه"
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
          </Tr>
        </Thead>
        <Tbody>
          {product?.map((item: any, idx: number) => {
            return (
              <Tr key={item?.id}>
                <Td>{idx + 1}</Td>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>
                  <TextField
                    className="budget-input"
                    onChange={(e) => handleYearChnage(idx, e)}
                  />
                </Td>
                <input
                  type="hidden"
                  {...register(`budgets.${idx}.productId`)}
                  value={item.id}
                />
                {/* also create and input array [1, 7, 2, ....] */}
                {Array.from({ length: 12 }, (_, i) => (
                  <Td>
                    <TextField
                      key={i}
                      {...register(`budgets.${idx}.months.${i}`)}
                      className="budget-input"
                    />
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
