"use client";

import addProductCategory from "@/server-actions/product/addProductCategory";
import DialogContainer from "../../general/dialog-container";
import NextTextFild from "../../general/next-text-fild";
import DialogLayer from "../../general/dialog-layer";
import PriamryBtn from "../../general/primary-btn";
import NextTreeView from "../../general/treeview";
import DialogCta from "../../general/dialog-cta";
import { useRouter } from "next/navigation";
import Dialog from "../../general/dialog";
import Alert from "../../general/alert";
import Icon from "../../general/icon";
import { useState } from "react";
import "./styles.scss";

export default function AddProductCategory() {
  const [closeDialog, setCloseDialog] = useState(false);
  const [disabled, setDisabled] = useState<any>(false);
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
      setDisabled(true);

      await addProductCategory(name);

      setCloseDialog(true);
      router.refresh();
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
              {/* <NextTextFild
                onChange={handleChange}
                errors={errors}
                name="name"
                label="نام"
              /> */}
              {/* <NextTreeView /> */}
              <PriamryBtn type="button" onClick={handleAdd} disabled={disabled}>
                {loading ? "در حال پردازش..." : "ثبت"}
              </PriamryBtn>
            </div>
          </DialogContainer>
        </DialogLayer>
      </Dialog>
    </div>
  );
}
