"use client";

import addBranch from "@/server-actions/branch/addBranch";
import PriamryBtn from "../../general/primary-btn";
import AddBranchInputs from "../branch-inputs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Alert from "../../general/alert";
import { useState } from "react";
import "./styles.scss";

const requireFilds = {
  distanceToCentralWarehouse: true,
  distanceToFactory: true,
  province: true,
  address: true,
  name: true,
  city: true,
};

export default function AddBranchClient() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<any>(null);
  const [disabled, setDisabled] = useState<any>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      setDisabled(true);

      await addBranch(data);

      setAlert({
        type: "success",
        msg: "شعبه با موفقیت ساخته شد",
      });

      router.refresh();
      router.push("/panel/branches-managment");
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
    <section className="add-branch-client">
      {alert && <Alert {...alert} />}
      <h2>اضافه کردن شعبه</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddBranchInputs
          register={register}
          requireFilds={requireFilds}
          errors={errors}
        />
        <PriamryBtn type="submit" disabled={disabled}>
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
