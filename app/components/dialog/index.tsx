"use client";

import DialogContext from "@/context/dialogContext";
import { useEffect, useMemo, useState } from "react";

interface Props {
  closeWhenOutsideClick?: boolean;
  children: React.ReactNode;
  ariaLabel: string;
  onClose?: any;
  close?: boolean;
  open?: boolean;
  show?: boolean;
}

export default function Dialog({
  closeWhenOutsideClick,
  children,
  ariaLabel,
  onClose,
  show = false,
  open,
  close,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(false);
    onClose?.();
  };

  useMemo(() => {
    setIsOpen(show);
    if (open) setIsOpen(true);
    if (close) setIsOpen(false);
  }, [open, close, show]);

  useEffect(() => {
    if (closeWhenOutsideClick) {
      const handleClick = ({ target }: any) => {
        if (!target.closest(".dialog")) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("click", handleClick);
      }

      return () => document.removeEventListener("click", handleClick);
    }
  }, [isOpen]);

  return (
    <DialogContext.Provider
      value={{ isOpen, closeDialog, ariaLabel, setIsOpen }}
    >
      {children}
    </DialogContext.Provider>
  );
}
