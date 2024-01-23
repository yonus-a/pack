"use client";

import editProduct from "@/server-actions/product/editProduct";
import PriamryBtn from "../../general/primary-btn";
import ProductInputs from "../product-inputs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Alert from "../../general/alert";
import { useState } from "react";
import "./styles.scss";

interface Props {
  categories: any;
  product: any;
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

export default function EditProductClient({
  categories,
  units,
  types,
  product,
}: Props) {
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

      await editProduct(product.id, data);

      setAlert({
        type: "success",
        msg: "محصول با موفقیت ویرایش شد",
      });

      router.refresh();
      router.push("/panel/products-managment");
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
    <section className="edit-product-client">
      {alert && <Alert {...alert} />}
      <h2>ویرایش محصول</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProductInputs
          requireFilds={requireFilds}
          categories={categories}
          defaultValues={product}
          register={register}
          errors={errors}
          units={units}
          types={types}
        />
        <PriamryBtn type="submit" disabled={loading}>
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
