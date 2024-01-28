"use client";

import addLimitBudget from "@/server-actions/limit-budget/addLimitBudget";
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
  limit: any;
}

export default function AddLimitCLient({ productId, branches, limit }: Props) {
  const brancheItems = selectOptionsGenerator(branches);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<any>(null);
  const [from, setFrom] = useState<any>(null);
  const [to, setTo] = useState<any>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
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

      await addLimitBudget({ ...data, from, to, productId });

      setAlert({
        type: "success",
        msg: "محدودیت با موفقیت اعمال شد",
      });

      setTimeout(() => {
        // router.refresh();
        // router.push("/panel/limit-managment");
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

  brancheItems.unshift({
    label: "هیچکدام",
    value: null,
  });

  return (
    <section className="add-limit-client" aria-label="add limit client">
      <form onSubmit={handleSubmit(onSubmit)}>
        <EqualizeItems>
          <NextMuiSelect
            items={brancheItems}
            register={register}
            label="برای شعبه"
            errors={errors}
            name="branchId"
            required
          />
          <NextTextFild
            register={register}
            label="محدودیت بودجه"
            errors={errors}
            type="number"
            name="limit"
            required
          />
        </EqualizeItems>
        <EqualizeItems>
          <div className="date-wrapper">
            از
            <NextDatePicker handleChange={setFrom} />
          </div>
          <NextDatePicker handleChange={setTo} />
        </EqualizeItems>
        <NextCheckbox register={register} name="permement" label="دائمی" />
        <PriamryBtn type="submit" disabled={loading}>
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
      {alert && <Alert {...alert} />}
    </section>
  );
}
