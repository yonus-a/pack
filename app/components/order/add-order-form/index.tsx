"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import addOrder from "@/server-actions/order/addOrder";
import PriamryBtn from "../../general/primary-btn";
import { useRouter } from "next/navigation";
import { getMonth } from "date-fns-jalali";
import { TextField } from "@mui/material";
import useUserId from "@/hooks/useUserId";
import Alert from "../../general/alert";
import { useState } from "react";
import "./styles.scss";

interface Props {
  products: any;
  branch: any;
  date: any;
}

export default function AddOrderForm({ products, branch, date }: Props) {
  const [disabled, setDisabled] = useState<any>(false);
  const [formState, setFormState] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<any>(null);
  const month = getMonth(date) + 1;
  const userId = useUserId();
  const router = useRouter();

  const handleChange = (item: any, { target }: any) => {
    const factor = +target.value;
    const number = factor * item.product_unit.unit;
    const totalWeight = number * +item.weight;

    setFormState({
      ...formState,
      [item.id]: {
        monthlyBudget: +item.monthlyBudget,
        dailyBudget: +item.dailyBudget,
        unit: +item.product_unit.unit,
        weight: item.weight,
        productId: item.id,
        stock: +item.stock,
        branchId: +branch,
        userId: userId,
        totalWeight,
        number,
        factor,
      },
    });
  };

  const handleClick = async () => {
    try {
      setLoading(true);
      setDisabled(true);

      if (!branch) {
        setAlert({
          type: "error",
          msg: "شعبه ای برای سفارش در نظر گرفته نشده !",
        });

        return false;
      }

      const items = Object.values(formState);
      const total_weight = items.reduce((a, v: any) => a + v.totalWeight, 0);
      const total_orders = items.reduce((a, v: any) => a + v.number, 0);
      const total_stock = items.reduce((a, v: any) => a + v.stock, 0);

      // TODO
      await addOrder({
        total_weight,
        total_orders,
        total_stock,
        branch,
        userId,
        items,
      });

      setAlert({
        type: "success",
        msg: "سفارش شما با موفقیت ثبت شد",
      });

      router.refresh();
      router.push("/panel/order-managment");
    } catch (e) {
      setAlert({
        type: "error",
        msg: "مشکلی پیش آمده لطفا مجددا تلاش کنید !",
      });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setAlert(null);
        setDisabled(false);
      }, 1800);
    }
  };

  return (
    <div className="add-order-form">
      {alert && <Alert {...alert} />}
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
          </Tr>
        </Thead>
        <Tbody>
          {products.map((item: any, idx: number) => {
            const budget = item.budget[0] || {};
            const monthlyBudget = budget[`month${month}`] || 0;
            const dailyBudget = Math.floor(monthlyBudget / 24);
            const stock = item.product_stock[0]?.amount;

            // add more data to item
            item.monthlyBudget = monthlyBudget;
            item.dailyBudget = dailyBudget;
            item.stock = stock;

            return (
              <Tr>
                <Td>{idx + 1}</Td>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{monthlyBudget}</Td>
                <Td>{dailyBudget}</Td>
                <Td>{stock}</Td>
                <Td>{item.weight}</Td>
                <Td>
                  <TextField
                    type="number"
                    onChange={(e) => handleChange(item, e)}
                    InputProps={{ inputProps: { min: 0 } }}
                  />
                </Td>
                <Td>{item.product_unit.name}</Td>
                <Td>{formState[item.id]?.number || 0}</Td>
                <Td>{formState[item.id]?.totalWeight || 0}</Td>
                <Td>0</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <PriamryBtn onClick={handleClick} type="button" disabled={disabled}>
        {loading ? "در حال پردازش..." : "سفارش"}
      </PriamryBtn>
    </div>
  );
}
