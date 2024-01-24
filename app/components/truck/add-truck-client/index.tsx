"use client";

import uploadFileAction from "@/server-actions/general/uploadFileAction";
import createFormData from "@/server-actions/general/createFormData";
import TruckInputs from "@/app/components/truck/truck-inputs";
import uniqueFilename from "@/utils/general/uniqueFilename";
import addTruck from "@/server-actions/truck/addTruck";
import PriamryBtn from "../../general/primary-btn";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Alert from "../../general/alert";
import { useState } from "react";
import "../global.scss";

const requiredFilds = {
  productTypes: true,
  tonnage: true,
  image: true,
  name: true,
};

export default function AddTruckClient() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<any>(null);
  const [disabled, setDisabled] = useState<any>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      setDisabled(true);

      const image = data.image[0];
      const nextImage = uniqueFilename(image, image.name);

      await addTruck({ ...data, image: nextImage.name });

      // upload file
      const formData = createFormData(nextImage, "/public/images/trucks");
      await uploadFileAction(formData);

      setAlert({
        type: "success",
        msg: "محصول با موفقیت ثبت شد",
      });

      router.refresh();
      router.push("/panel/trucks-managment");
    } catch (e) {
      setAlert({
        type: "error",
        msg: "مشکلی پیش آمده لطفا مجددا تلاش کنید !",
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
    <section className="truck-form">
      <h2>اضافه کردن کامیون</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TruckInputs
          requiredFilds={requiredFilds}
          register={register}
          errors={errors}
        />
        <PriamryBtn type="submit" disabled={disabled}>
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
      {alert && <Alert {...alert} />}
    </section>
  );
}
