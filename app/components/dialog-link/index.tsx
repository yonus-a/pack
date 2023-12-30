"use client";

import DialogContext from "@/context/dialogContext";
import { useContext } from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  role?: string;
  onClick?: any;
}

export default function DialogLink({
  className = "",
  children,
  role = "",
  onClick = () => {},
  href,
}: Props) {
  const { closeDialog } = useContext<any>(DialogContext);

  const handleCLick = () => {
    closeDialog && closeDialog();
    onClick();
  };

  return (
    <Link href={href} className={className} onClick={handleCLick} role={role}>
      {children}
    </Link>
  );
}
