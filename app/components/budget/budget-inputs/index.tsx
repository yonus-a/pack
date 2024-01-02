import selectOptionsGenerator from "@/utils/selectOptionsGenerator";
import NextDatePicker from "../../general/next-date-picker";
import NextMuiSelect from "../../general/next-mui-select";
import EqualizeItems from "../../general/equalize-items";
import "./styles.scss";

interface Props {
  defaultValues?: any;
  requireFilds: any;
  register: any;
  branches: any;
  errors: any;
}

export default function BudgetInputs({
  defaultValues,
  requireFilds,
  branches,
  register,
  errors,
}: Props) {
  const branchesOption = selectOptionsGenerator(branches);

  return (
    <>
      <EqualizeItems>
        <NextMuiSelect
          items={branchesOption}
          register={register}
          name="branch"
          errors={errors}
          label="شعبه"
          required={requireFilds?.name}
          defaultValue={defaultValues?.name}
        />
        <NextDatePicker />
      </EqualizeItems>
    </>
  );
}
