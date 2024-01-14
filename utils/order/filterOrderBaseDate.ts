import { startOfDay, endOfDay } from "date-fns-jalali";

export default function filterOrderBaseDate(date: number) {
  if (!date) return {};

  const nextDate = new Date(date);
  const startDay = startOfDay(nextDate);
  const endDay = endOfDay(nextDate);

  return {
    orderAt: {
      gt: startDay,
      lt: endDay,
    },
  };
}
