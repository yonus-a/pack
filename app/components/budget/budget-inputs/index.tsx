import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import selectOptionsGenerator from "@/utils/selectOptionsGenerator";
import getProducts from "@/server-actions/product/getProducts";
import NextDatePicker from "../../general/next-date-picker";
import NextMuiSelect from "../../general/next-mui-select";
import EqualizeItems from "../../general/equalize-items";
import { useEffect, useState } from "react";
import "./styles.scss";

interface Props {
  defaultValues?: any;
  requireFilds: any;
  register: any;
  branches: any;
  errors: any;
  watch: any;
}

export default function BudgetInputs({
  defaultValues,
  requireFilds,
  branches,
  register,
  errors,
  watch,
}: Props) {
  const branchesOption = selectOptionsGenerator(branches);
  const [product, setProduct] = useState<any>([]);
  const method = watch("method");

  useEffect(() => {
    (async () => {
      try {
        if (method === 360) {
          const products = await getProducts();
          setProduct(products);
        }
      } catch (e) {}
    })();
  }, [method]);

  return (
    <>
      <EqualizeItems>
        <NextMuiSelect
          items={branchesOption}
          register={register}
          name="branch"
          errors={errors}
          label="شعبه"
          required={requireFilds?.name}
          defaultValue={defaultValues?.name}
        />
        <NextMuiSelect
          items={branchesOption}
          register={register}
          name="method"
          errors={errors}
          label="برای"
          required={requireFilds?.method}
          defaultValue={defaultValues?.method}
        />
        <NextDatePicker />
      </EqualizeItems>
      <Table>
        <Thead>
          <Tr>
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
          {product?.map((item: any, idx: number) => {
            return (
              <Tr key={item?.id}>
                <Td>{idx + 1}</Td>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.product_category?.name}</Td>
                <Td>{item.product_unit?.name}</Td>
                <Td>{item.product_type?.name}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
