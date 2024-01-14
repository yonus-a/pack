export default function isSomeFildEmpty(value: any) {
  return value.some(({ months }: any) => {
    if (months.some(Boolean)) {
      return months.some((v: any) => !v);
    }
  });
}
