"use client";

import addNotification from "@/server-actions/notification/addNotification";
import NotificationInputs from "../notification-inputs";
import PriamryBtn from "../../general/primary-btn";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Alert from "../../general/alert";
import { useState } from "react";
import "./styles.scss";

const requireFilds = {};

export default function AddNotificationClient() {
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

      await addNotification(data);

      setAlert({
        type: "success",
        msg: "اعلان با موفقیت ثبت شد",
      });

      router.refresh();
      router.push("/panel/notification-managment");
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
    <section className="add-notification-client">
      {alert && <Alert {...alert} />}
      <h2>اضافه کردن اعلان</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NotificationInputs
          register={register}
          errors={errors}
          requireFilds={requireFilds}
        />
        <PriamryBtn type="submit" disabled={loading}>
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
