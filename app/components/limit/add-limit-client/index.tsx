"use client";

import deleteProductLimitBudget from "@/server-actions/limit-budget/deleteProductLimitBudget";
import upsertLimitBudget from "@/server-actions/limit-budget/upsertLimitBudget";
import selectOptionsGenerator from "@/utils/selectOptionsGenerator";
import NextDatePicker from "../../general/next-date-picker";
import NextMuiSelect from "../../general/next-mui-select";
import EqualizeItems from "../../general/equalize-items";
import NextTextFild from "../../general/next-text-fild";
import NextCheckbox from "../../general/next-checkbox";
import PriamryBtn from "../../general/primary-btn";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Alert from "../../general/alert";
import { useState } from "react";
import "./styles.scss";

interface Props {
  productId: any;
  branches: any;
  product: any;
}

export default function AddLimitCLient({
  productId,
  branches,
  product,
}: Props) {
  const limitBudget = product.limit_budget[0] || {};

  const [from, setFrom] = useState<any>(limitBudget.from);
  const [to, setTo] = useState<any>(limitBudget.to);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<any>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      if (data.permement) {
        if (from && to) {
          setAlert({
            type: "error",
            msg: "وارد کردن تاریخ در زمان انتخاب داعمی مقدور نیست !",
          });

          return false;
        }
      }

      await upsertLimitBudget(limitBudget.id, { ...data, from, to, productId });

      setAlert({
        type: "success",
        msg: "محدودیت با موفقیت اعمال شد",
      });

      setTimeout(() => {
        router.refresh();
        router.push("/panel/limit-managment");
      }, 1850);
    } catch (e) {
      setAlert({
        type: "error",
        msg: "مشکلی پیش آمده لطفا مجددا تلاش کنید !",
      });
    } finally {
      setTimeout(() => {
        setLoading(false);
        setAlert(null);
      }, 1800);
    }
  };

  const handleDelete = async (id: any) => {
    try {
      await deleteProductLimitBudget(id);
      router.refresh();
    } catch (e) {}
  };

  const brancheItems = branches.map(({ id, name }: any) => ({
    label: name,
    value: JSON.stringify([{ id }]),
  }));

  brancheItems.unshift({
    label: "همه شعبه ها",
    value: JSON.stringify(branches.map(({ id }: any) => ({ id }))),
  });

  return (
    <section className="add-limit-client" aria-label="add limit client">
      <form onSubmit={handleSubmit(onSubmit)}>
        <EqualizeItems>
          <NextMuiSelect
            defaultValue={JSON.stringify(limitBudget.branch)}
            items={brancheItems}
            register={register}
            label="برای شعبه"
            errors={errors}
            name="branch"
            required
          />
          <NextTextFild
            defaultValue={limitBudget.limit}
            label="محدودیت بودجه"
            register={register}
            errors={errors}
            type="number"
            name="limit"
            required
          />
        </EqualizeItems>
        <EqualizeItems>
          <div className="date-wrapper">
            از
            <NextDatePicker defaultValue={from} handleChange={setFrom} />
          </div>
          <NextDatePicker handleChange={setTo} defaultValue={to} />
        </EqualizeItems>
        <NextCheckbox
          defaultChecked={limitBudget.permement}
          register={register}
          name="permement"
          label="دائمی"
        />
        <PriamryBtn type="submit" disabled={loading}>
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
        <button
          className="delete-btn btn"
          onClick={() => handleDelete(limitBudget.id)}
          type="button"
        >
          حذف
        </button>
      </form>
      {alert && <Alert {...alert} />}
    </section>
  );
}
