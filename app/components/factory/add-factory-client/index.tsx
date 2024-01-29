import upsertFactory from "@/server-actions/factory/upsertFactory";
import NextTextFild from "../../general/next-text-fild";
import PriamryBtn from "../../general/primary-btn";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./styles.scss";

export default function AddFactoryClient() {
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

      await upsertFactory(0, data);

      setAlert({
        type: "success",
        msg: "کارخانه با موفقیت ایجاد شد",
      });

      setTimeout(() => {
        router.refresh();
        router.push("");
      }, 1850);
    } catch (e) {
      setAlert({
        type: "error",
        msg: "مشکلی پیش آمده لطفا مجددا تلاش کنید !",
      });
    } finally {
      setTimeout(() => {
        setLoading(false);
        setAlert(null);
      }, 1800);
    }
  };
  return (
    <section className="upsertFactory">
      کارخانه
      <form onSubmit={handleSubmit(onSubmit)}>
        <NextTextFild
          register={register}
          name="name"
          errors={errors}
          required
        />
        <NextTextFild
          register={register}
          name="latitude"
          errors={errors}
          required
        />
        <NextTextFild
          register={register}
          name="longitude"
          errors={errors}
          required
        />
        <PriamryBtn type="submit" disabled={loading}>
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
