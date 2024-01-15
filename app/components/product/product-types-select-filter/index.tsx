import selectOptionsGenerator from "@/utils/selectOptionsGenerator";
import NextMuiSelect from "@/app/components/general/next-mui-select";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  types: any;
}

export default function ProductTypesSelectFilter({ types }: Props) {
  const typesOption = selectOptionsGenerator(types);

  let params = new URLSearchParams([...useSearchParams()]);
  const router = useRouter();

  const handleTypeChange = ({ target }: any) => {
    params.set("type", target.value);
    router.push("?" + params.toString());
  };

  return (
    <NextMuiSelect
      items={typesOption}
      label="نوع"
      onChange={handleTypeChange}
    />
  );
}
