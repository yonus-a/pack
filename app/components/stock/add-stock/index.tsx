"use client";

import addStock from "@/server-actions/stock/addStock";
import NextTextFild from "../../general/next-text-fild";
import PriamryBtn from "../../general/primary-btn";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Alert from "../../general/alert";
import { useState } from "react";
import "./styles.scss";

interface Props {
  currentAmount: any;
}

export default function AddStockClient({ currentAmount }: Props) {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<any>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      await addStock(data);

      setAlert({
        type: "success",
        msg: "موجودی با موفقیت ثبت شد",
      });

      setTimeout(() => {
        router.refresh();
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
    <div className="add-stock-client">
      <h1>مدریت موجودی انبار</h1>
      <h2>موجودی فعلی {currentAmount}</h2>
      {alert && <Alert {...alert} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <NextTextFild
          register={register}
          errors={errors}
          name="amount"
          label="موجودی"
          type="number"
        />
        <PriamryBtn type="submit">
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </div>
  );
}
