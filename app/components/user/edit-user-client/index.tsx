"use client";

import editUser from "@/server-actions/user/editUser";
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
    setValue,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      await editUser(user.id, data);

      setAlert({
        type: "success",
        msg: "کاربر با موفقیت ویرایش شد",
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
      setTimeout(() => setAlert(null), 1800);
    }
  };

  return (
    <section className="edit-user-client">
      {alert && <Alert {...alert} />}
      <h2>ویرایش کردن کاربر</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInputs
          requireFilds={requireFilds}
          permissions={permissions}
          defaultValues={user}
          setValue={setValue}
          branches={branches}
          register={register}
          errors={errors}
        />
        <PriamryBtn type="submit" disabled={loading}>
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
