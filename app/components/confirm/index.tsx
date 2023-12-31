"use client";

import "./styles.scss";
import Dialog from "../dialog";
import DialogLayer from "../dialog-layer";
import DialogCta from "../dialog-cta";
import DialogContainer from "../dialog-container";

interface Props {
  children: React.ReactNode;
  msg?: any;
  onOk: any;
  className?: string;
  disabled?: any;
}

export default function Confirm({
  children,
  msg = "آیا از این کار مطمئن هستید ؟",
  onOk,
  className,
  disabled,
}: Props) {
  return (
    <div className="confirm">
      <Dialog ariaLabel="confirm">
        <DialogCta disabled={disabled} className={className}>
          {children}
        </DialogCta>
        <DialogLayer>
          <DialogContainer>
            <p>{msg}</p>
            <div className="actions">
              <DialogCta onClick={onOk}>بله</DialogCta>
              <DialogCta>خیر</DialogCta>
            </div>
          </DialogContainer>
        </DialogLayer>
      </Dialog>
    </div>
  );
}
