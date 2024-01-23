"use client";

import isSomeFildEmpty from "@/utils/general/isSomeFildEmpty";
import addBudget from "@/server-actions/budget/addBudget";
import PriamryBtn from "../../general/primary-btn";
import { useRouter } from "next/navigation";
import BudgetInputs from "../add-budget-inputs";
import { useForm } from "react-hook-form";
import Alert from "../../general/alert";
import { useState } from "react";
import "./styles.scss";

interface Props {
  branches: any;
}

export default function AddBudgetClient({ branches }: Props) {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<any>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      if (isSomeFildEmpty(data.budgets)) {
        setAlert({
          type: "error",
          msg: "مقادیر ناقض وارد شده اند !",
        });

        return false;
      }

      // filtred fill budgets
      data.budgets = data.budgets.filter(({ months }: any) =>
        months.every(Boolean)
      );

      await addBudget(data);

      setAlert({
        type: "success",
        msg: "بودجه با موفقیت ثبت شد",
      });

      router.refresh();
      router.push("/panel/budget-managment");
    } catch (e: any) {
      setAlert({
        type: "error",
        msg: e.message,
      });
    } finally {
      setLoading(false);
      setTimeout(() => setAlert(null), 1800);
    }
  };

  return (
    <section className="add-budget-client">
      {alert && <Alert {...alert} />}
      <h2>اضافه کردن بودجه</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BudgetInputs
          register={register}
          branches={branches}
          setValue={setValue}
        />
        <PriamryBtn type="submit" disabled={loading}>
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
