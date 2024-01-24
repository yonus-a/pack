"use client";

import addUser from "@/server-actions/user/addUser";
import PriamryBtn from "../../general/primary-btn";
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
  branch: true,
  idcard: true,
  phone: true,
};

export default function AddUserClient({ branches, permissions }: Props) {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<any>(null);
  const [disabled, setDisabled] = useState<any>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      setDisabled(true);

      await addUser(data);

      setAlert({
        type: "success",
        msg: "کاربر با موفقیت ایجاد شد",
      });

      router.refresh();
      router.push("/panel/users-managment");
    } catch (e: any) {
      setAlert({
        type: "error",
        msg: e.message,
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
    <section className="add-user-client">
      {alert && <Alert {...alert} />}
      <h2>اضافه کردن کاربر</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInputs
          requireFilds={requireFilds}
          permissions={permissions}
          register={register}
          setValue={setValue}
          branches={branches}
          errors={errors}
        />
        <PriamryBtn type="submit" disabled={disabled}>
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
