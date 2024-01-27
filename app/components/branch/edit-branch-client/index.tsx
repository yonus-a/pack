"use client";

import editBranch from "@/server-actions/branch/editBranch";
import PriamryBtn from "../../general/primary-btn";
import { useRouter } from "next/navigation";
import BranchInputs from "../branch-inputs";
import { useForm } from "react-hook-form";
import Alert from "../../general/alert";
import { useState } from "react";
import "./styles.scss";

interface Props {
  branch: any;
}

const requireFilds = {
  distanceToCentralWarehouse: true,
  distanceToFactory: true,
  province: true,
  address: true,
  name: true,
  city: true,
};

export default function EditBranchClient({ branch }: Props) {
  const [disabled, setDisabled] = useState<any>(false);
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
      setDisabled(true);

      await editBranch(branch.id, data);

      setAlert({
        type: "success",
        msg: "شعبه با موفقیت ویرایش شد",
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
    <section className="edit-branch-client">
      {alert && <Alert {...alert} />}
      <h2>ویرایش کردن شعبه</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BranchInputs
          register={register}
          requireFilds={requireFilds}
          errors={errors}
          defaultValues={branch}
        />
        <PriamryBtn type="submit" disabled={disabled}>
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
