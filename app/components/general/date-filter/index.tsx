"use client";

import { useRouter, useSearchParams } from "next/navigation";
import NextDatePicker from "../next-date-picker";
import { useEffect, useState } from "react";
import "./styles.scss";

interface Props {
  defaultDate: any;
}

export default function DateFilter({ defaultDate }: Props) {
  let params = new URLSearchParams([...useSearchParams()]);
  const [date, setDate] = useState(defaultDate);
  const router = useRouter();

  useEffect(() => {
    if (date) {
      params.set("date", date);
      router.push("?" + params.toString());
    }
  }, [date]);

  return (
    <NextDatePicker
      handleChange={setDate}
      views={["year", "month", "day"]}
      defaultValue={date}
    />
  );
}
