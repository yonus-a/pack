import selectOptionsGenerator from "@/utils/selectOptionsGenerator";
import NextMuiSelect from "@/app/components/general/next-mui-select";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  categories: any;
}

export default function ProductCategoriesSelectFilters({ categories }: Props) {
  const categoriesOption = selectOptionsGenerator(categories);
  let params = new URLSearchParams([...useSearchParams()]);
  const router = useRouter();

  const handleCategoryChange = ({ target }: any) => {
    params.set("category", target.value);
    router.push("?" + params.toString());
  };

  return (
    <NextMuiSelect
      onChange={handleCategoryChange}
      items={categoriesOption}
      label="دسته بندی"
    />
  );
}
