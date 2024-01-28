import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth/signin");

  return (
    <main>
      <h1>پروژه پاک</h1>
    </main>
  );
}
