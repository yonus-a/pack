"use client";

import addProductCategory from "@/server-actions/product/addProductCategory";
import DialogContainer from "../dialog-container";
import NextTextFild from "../next-text-fild";
import { useRouter } from "next/navigation";
import DialogLayer from "../dialog-layer";
import PriamryBtn from "../primary-btn";
import DialogCta from "../dialog-cta";
import { useState } from "react";
import Dialog from "../dialog";
import Alert from "../alert";
import Icon from "../icon";
import "./styles.scss";

export default function AddProductCategory() {
  const [closeDialog, setCloseDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<any>(null);
  const [errors, setErrors] = useState<any>({});
  const [name, setName] = useState();
  const router = useRouter();

  const handleAdd = async () => {
    setErrors({ name: !name });

    // validate
    if (errors.name) return false;

    try {
      setLoading(true);

      await addProductCategory(name);

      router.refresh();
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

  const handleChange = ({ target }: any) => {
    const value = target.value;
    setErrors({ name: !value });
    setName(value);
  };

  return (
    <div className="add-product-category">
      {alert && <Alert {...alert} />}
      <Dialog ariaLabel="add product category" close={closeDialog}>
        <DialogCta className="btn icon-wrapper">
          <Icon name="add" />
        </DialogCta>
        <DialogLayer>
          <DialogContainer>
            <div className="form">
              <NextTextFild
                onChange={handleChange}
                errors={errors}
                name="name"
                label="نام"
              />
              <PriamryBtn type="button" onClick={handleAdd}>
                {loading ? "در حال پردازش..." : "ثبت"}
              </PriamryBtn>
            </div>
          </DialogContainer>
        </DialogLayer>
      </Dialog>
    </div>
  );
}
