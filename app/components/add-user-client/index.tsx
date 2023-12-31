"use client";

import permissionSelectOption from "@/utils/permissionSelectOption";
import addUser from "@/server-actions/addUser";
import NextMuiSelect from "../next-mui-select";
import EqualizeItems from "../equalize-items";
import NextTextFild from "../next-text-fild";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import PriamryBtn from "../primary-btn";
import { useState } from "react";
import Alert from "../alert";
import "./styles.scss";

export default function AddUserClient() {
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
        <EqualizeItems>
          <NextTextFild
            label="نام"
            register={register}
            name="firstname"
            errors={errors}
            required
          />
          <NextTextFild
            label="نام خانوادگی"
            register={register}
            name="lastname"
            errors={errors}
            required
          />
        </EqualizeItems>
        <EqualizeItems>
          <NextTextFild
            label="شماره تماس"
            register={register}
            name="phone"
            errors={errors}
            required
          />
          <NextTextFild
            label="کد ملی"
            register={register}
            name="idcard"
            errors={errors}
            required
          />
          <NextMuiSelect
            items={permissionSelectOption}
            register={register}
            name="permission"
            label="سطح دسترسی"
            errors={errors}
            required
          />
        </EqualizeItems>
        <PriamryBtn type="submit">
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
