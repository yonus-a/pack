"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import UserInputs from "../user-inputs";
import { useState } from "react";
import "./styles.scss";
import Alert from "../../general/alert";
import PriamryBtn from "../../general/primary-btn";

interface Props {
  permissions: any;
  branches: any;
  user: any;
}

const requireFilds = {
  permission: true,
  firstname: true,
  lastname: true,
  idcard: true,
  branch: true,
  phone: true,
};

export default function EditUserClient({ branches, user, permissions }: Props) {
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

      // TODO

      setAlert({
        type: "success",
        msg: "کاربر با موفقیت ویرایش شد",
      });

      setTimeout(() => {
        router.refresh();
        router.push("/panel/users-managment");
      }, 1850);
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
    <section className="edit-user-client">
      {alert && <Alert {...alert} />}
      <h2>ویرایش کردن کاربر</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInputs
          register={register}
          errors={errors}
          requireFilds={requireFilds}
          permissions={permissions}
          branches={branches}
          defaultValues={user}
        />
        <PriamryBtn type="submit">
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
