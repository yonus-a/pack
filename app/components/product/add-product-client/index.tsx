"use client";

import addProduct from "@/server-actions/product/addProduct";
import PriamryBtn from "../../general/primary-btn";
import ProductInputs from "../product-inputs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Alert from "../../general/alert";
import { useState } from "react";
import "./styles.scss";

interface Props {
  categories: any;
  units: any;
  types: any;
}

const requireFilds = {
  category: true,
  unit: true,
  name: true,
  type: true,
  id: true,
};

export default function AddProductClient({ categories, units, types }: Props) {
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

      // TODO
      await addProduct(data);

      setAlert({
        type: "success",
        msg: "محصول با موفقیت ساخته شد",
      });

      setTimeout(() => {
        router.refresh();
        router.push("/panel/products-managment");
      }, 1850);
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
    <section className="add-product-client">
      {alert && <Alert {...alert} />}
      <h2>اضافه کردن محصول</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProductInputs
          requireFilds={requireFilds}
          categories={categories}
          register={register}
          errors={errors}
          units={units}
          types={types}
        />
        <PriamryBtn type="submit">
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
