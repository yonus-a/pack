"use client";

import EqualizeItems from "../equalize-items";
import NextTextFild from "../next-text-fild";
import { useForm } from "react-hook-form";
import PriamryBtn from "../primary-btn";
import "./styles.scss";

export default function AddUserClient() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <section className="add-user-client">
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
        </EqualizeItems>
        <PriamryBtn type="submit">ثبت</PriamryBtn>
      </form>
    </section>
  );
}
