"use client";

import PriamryBtn from "../../general/primary-btn";
import addUser from "@/server-actions/addUser";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import UserInputs from "../user-inputs";
import Alert from "../../general/alert";
import { useState } from "react";
import "./styles.scss";

interface Props {
  permissions: any;
  branches: any;
}

const requireFilds = {
  permission: true,
  firstname: true,
  lastname: true,
  branch: false,
  idcard: true,
  phone: true,
};

export default function AddUserClient({ branches, permissions }: Props) {
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

      await addUser(data);

      setAlert({
        type: "success",
        msg: "کاربر با موفقیت ایجاد شد",
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
    <section className="add-user-client">
      {alert && <Alert {...alert} />}
      <h2>اضافه کردن کاربر</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInputs
          register={register}
          errors={errors}
          requireFilds={requireFilds}
          branches={branches}
          permissions={permissions}
        />
        <PriamryBtn type="submit">
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
