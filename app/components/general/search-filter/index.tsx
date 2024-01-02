"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { TextField } from "@mui/material";
import "./styles.scss";

export default function SearchFilter() {
  let params = new URLSearchParams([...useSearchParams()]);
  const router = useRouter();

  const handleSearch = ({ target }: any) => {
    params.set("search", target.value);
    push();
  };

  const push = () => {
    router.push("?" + params.toString());
  };

  return (
    <div className="filter-posts">
      <TextField onChange={handleSearch} label="جستجو" />
    </div>
  );
}
