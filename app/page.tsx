import { redirect } from "next/navigation";
import "./panel/index";

export default function Home() {
  redirect("/auth/signin");

  return (
    <main>
      <h1>پروژه پاک</h1>
    </main>
  );
}
