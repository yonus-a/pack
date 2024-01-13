import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import selectOptionsGenerator from "@/utils/selectOptionsGenerator";
import getProducts from "@/server-actions/product/getProducts";
import NextDatePicker from "../../general/next-date-picker";
import NextMuiSelect from "../../general/next-mui-select";
import EqualizeItems from "../../general/equalize-items";
import { TextField } from "@mui/material";
import { useState } from "react";
import "./styles.scss";

interface Props {
  defaultValues?: any;
  register: any;
  branches: any;
  setValue: any;
  errors: any;
}

export default function BudgetInputs({
  defaultValues,
  branches,
  register,
  errors,
  setValue,
}: Props) {
  const branchesOption = selectOptionsGenerator(branches);
  const [product, setProduct] = useState<any>([]);

  const handleDateChange = async (date: any) => {
    try {
      const products = await getProducts();
      setProduct(products);
      setValue("date", date, { shouldValidate: true });
    } catch (e) {}
  };

  const handleYearChnage = (id: number, { target }: any) => {
    const value = target.value;
    const result = Math.floor(+value / 12);

    for (let i = 0; i < 12; i++) {
      setValue(`budgets.${id}.months.${i}`, result);
    }

    setValue(`budgets.${id}.year`, value, {
      shouldValidate: true,
    });
  };

  return (
    <>
      <EqualizeItems>
        <NextMuiSelect
          items={branchesOption}
          register={register}
          name="branch"
          errors={errors}
          label="شعبه"
          defaultValue={defaultValues?.name}
        />
        <NextDatePicker
          handleChange={handleDateChange}
          views={["year", "month"]}
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
                {Array.from({ length: 12 }, (_, i) => (
                  <Td>
                    <TextField
                      key={i}
                      {...register(`budgets.${idx}.months.${i}`, {
                        required: true,
                      })}
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
