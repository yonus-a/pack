"use client";

import uploadFileAction from "@/server-actions/general/uploadFileAction";
import createFormData from "@/server-actions/general/createFormData";
import TruckInputs from "@/app/components/truck/truck-inputs";
import uniqueFilename from "@/utils/general/uniqueFilename";
import editTruck from "@/server-actions/truck/editTruck";
import PriamryBtn from "../../general/primary-btn";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Alert from "../../general/alert";
import { useState } from "react";
import "../global.scss";

const requiredFilds = {
  tonnage: true,
  image: false,
  name: true,
};

interface Props {
  truck: any;
}

export default function EditTruckClient({ truck }: Props) {
  const [disabled, setDisabled] = useState<any>(false);
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
      setDisabled(true);

      const image = data.image[0];
      let nextImage;

      if (image) {
        nextImage = uniqueFilename(image, image.name);
      }

      await editTruck(truck.id, { ...data, image: nextImage?.name });

      setAlert({
        type: "success",
        msg: "محصول با موفقیت ویرایش شد",
      });

      if (nextImage) {
        const formData = createFormData(nextImage, "/public/images/trucks");
        await uploadFileAction(formData);
      }

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
      <h2>ویرایش کامیون</h2>
      <form className="truck-form" onSubmit={handleSubmit(onSubmit)}>
        <TruckInputs
          requiredFilds={requiredFilds}
          defaultValues={truck}
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
