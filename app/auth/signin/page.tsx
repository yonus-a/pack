"use client";

import PriamryBtn from "@/app/components/general/primary-btn";
import ErrorMsg from "@/app/components/general/error-msg";
import SendOTP from "@/app/components/auth/send-otp";
import { TextField, Button } from "@mui/material";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import "./styles.scss";

export default function Signin() {
  const [errors, setErrors] = useState<any>({});
  const [formState, setFormState] = useState({
    idcard: "",
    otp: "",
  });

  const handleChange = ({ target }: any) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  const handleSignin = async () => {
    await signIn("credentials", { callbackUrl: "/panel", ...formState });
  };

  // const validate = () => {
  //   if (formState.otp === "") {
  //     setErrors({ ...errors, otp: { required: true } });
  //   }

  //   if (formState.idcard === "") {
  //     setErrors({ ...errors, idcard: { required: true } });
  //   }
  // };

  return (
    <main className="signin">
      <section className="form-section">
        <div className="box">
          <Image
            src="/images/logo.jpg"
            width={200}
            height={200}
            alt="شرکت لبنیاتی پاک"
          />
          <div className="form">
            <TextField
              type="text"
              label="شماره ملی"
              onChange={handleChange}
              name="idcard"
              autoFocus
            />
            {errors.idcard?.required && (
              <ErrorMsg>لطفا شماره ملی خود را وارد کنید</ErrorMsg>
            )}
            <div className="input-group">
              <SendOTP idcard={formState.idcard} />
              <TextField
                className="input"
                type="text"
                label="رمز یکبار مصرف"
                onChange={handleChange}
                name="otp"
              />
            </div>
            {errors?.otp?.required && (
              <ErrorMsg>لطفا رمز را وارد کنید</ErrorMsg>
            )}
            <PriamryBtn type="submit" onClick={handleSignin}>
              ورود
            </PriamryBtn>
          </div>
        </div>
      </section>
      <section className="image-section"></section>
    </main>
  );
}
