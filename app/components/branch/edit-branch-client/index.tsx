"use client";

import editBranch from "@/server-actions/editBranch";
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
  name: true,
  province: true,
  city: true,
  address: true,
  distanceToCentralWarehouse: true,
  distanceToFactory: true,
};

export default function EditBranchClient({ branch }: Props) {
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
      setTimeout(() => setAlert(null), 1800);
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
        <PriamryBtn type="submit" disabled={loading}>
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
