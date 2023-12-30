"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import "./styles.scss";

export default function Signin() {
  return (
    <main className="signout">
      <div className="box">
        <p>ایا مطمعن هستید که میخواهید خارج شوید ؟</p>
        <Link href="/">خیر</Link>
        <button onClick={() => signOut({ callbackUrl: "/" })}>بله</button>
      </div>
    </main>
  );
}
