"use client";

import DialogContext from "@/context/dialogContext";
import { useContext, useEffect } from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  clicked?: boolean;
  disabled?: any;
}

export default function DialogCta({
  className,
  children,
  onClick,
  clicked,
  disabled,
}: Props) {
  const { isOpen, setIsOpen } = useContext<any>(DialogContext);

  const handleClick = () => {
    if (onClick) onClick();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (clicked) setIsOpen(true);
  }, [clicked, setIsOpen]);

  return (
    <button
      type="button"
      className={`dialog-cta ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
