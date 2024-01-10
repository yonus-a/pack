"use client";

import addBudget from "@/server-actions/budget/addBudget";
import PriamryBtn from "../../general/primary-btn";
import { useRouter } from "next/navigation";
import BudgetInputs from "../budget-inputs";
import { useForm } from "react-hook-form";
import Alert from "../../general/alert";
import { useState } from "react";
import "./styles.scss";

interface Props {
  branches: any;
}

const requireFilds = {};

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

      // TODO
      await addBudget(data);

      setAlert({
        type: "success",
        msg: "بودجه با موفقیت ثبت شد",
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
    <section className="add-budget-client">
      {alert && <Alert {...alert} />}
      <h2>اضافه کردن بودجه</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BudgetInputs
          register={register}
          requireFilds={requireFilds}
          errors={errors}
          branches={branches}
          setValue={setValue}
        />
        <PriamryBtn type="submit">
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
