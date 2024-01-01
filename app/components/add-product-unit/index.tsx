"use client";

import addProductUnit from "@/server-actions/product/addProductUnit";
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

export default function AddProductUnit() {
  const [closeDialog, setCloseDialog] = useState(false);
  const [formState, setFormState] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<any>(null);
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();

  const handleAdd = async () => {
    setErrors({ name: !formState.name, unit: !formState.unit });

    // validate
    if (errors.name) return false;
    if (errors.unit) return false;

    try {
      setLoading(true);

      // TODO
      await addProductUnit(formState);

      setCloseDialog(true);
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
    const key = target.name;

    setFormState({ ...formState, [key]: value });
    setErrors({ ...errors, [key]: !value });
  };

  return (
    <div className="add-product-unit">
      {alert && <Alert {...alert} />}
      <Dialog ariaLabel="add product unit" close={closeDialog}>
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
              <NextTextFild
                onChange={handleChange}
                errors={errors}
                name="unit"
                label="واحد"
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
