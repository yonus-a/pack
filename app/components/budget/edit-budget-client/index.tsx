"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import editBudget from "@/server-actions/budget/editBudget";
import PriamryBtn from "../../general/primary-btn";
import { useRouter } from "next/navigation";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Alert from "../../general/alert";
import { useState } from "react";
import "./styles.scss";

interface Props {
  product: any;
}

export default function EditBudgetClient({ product }: Props) {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<any>(null);
  const budget = product.budget[0];
  const router = useRouter();

  const { register, handleSubmit, setValue } = useForm({});

  const handleYearChnage = ({ target }: any) => {
    const value = target.value;
    const result = Math.floor(+value / 12);

    // create month1, month2, ... month12
    for (let i = 1; i <= 12; i++) {
      setValue(`month${i}`, result);
    }

    setValue(`year`, value);
  };

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      // TODO
      await editBudget(budget.id, data);

      setAlert({
        type: "success",
        msg: "بودجه با موفقیت ویرایش شد",
      });

      setTimeout(() => {
        router.refresh();
        router.push("/panel/budget-managment");
      }, 1850);
    } catch (e) {
      setAlert({
        type: "error",
        msg: "مشکلی پیش آمده لطفا مجددا تلاش کنید !",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setAlert(null), 1800);
    }
  };

  return (
    <section className="edit-budget-client">
      {alert && <Alert {...alert} />}
      <h2>ویرایش بودجه</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <Tr>
              <Td>{product.id}</Td>
              <Td>{product.name}</Td>
              <Td>{product.name}</Td>
              <Td>
                <TextField
                  onChange={handleYearChnage}
                  className="budget-input"
                  defaultValue={budget.year}
                  required
                />
              </Td>
              {Array.from({ length: 12 }, (_, i) => (
                <Td>
                  <TextField
                    {...register(`month${i + 1}`)}
                    className="budget-input"
                    defaultValue={budget[`month${i + 1}`]}
                    required
                  />
                </Td>
              ))}
            </Tr>
          </Tbody>
        </Table>
        <PriamryBtn type="submit">
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
