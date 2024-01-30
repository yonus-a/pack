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
  weight: true,
  group: true,
  type: true,
  unit: true,
  name: true,
  id: true,
};

export default function AddProductClient({ categories, units, types }: Props) {
  const [disabled, setDisabled] = useState<any>(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<any>(null);
  const router = useRouter();

  // categories
  const nextCategories = categories.map((item: any) => {
    // parentId === id
    if (categories.find(({ id }: any) => id == item.parentId)) {
      // id === parentId
      if (categories.find(({ parentId }: any) => parentId == item.id)) {
        return item;
      }
    } else {
      return item;
    }
  });

  console.log(categories);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      setDisabled(true);

      // TODO
      await addProduct(data);

      setAlert({
        type: "success",
        msg: "محصول با موفقیت ساخته شد",
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
      setTimeout(() => {
        setAlert(null);
        setDisabled(false);
      }, 1800);
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
        <PriamryBtn type="submit" disabled={disabled}>
          {loading ? "در حال پردازش..." : "ثبت"}
        </PriamryBtn>
      </form>
    </section>
  );
}
