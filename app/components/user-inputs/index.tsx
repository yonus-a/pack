import permissionSelectOption from "@/utils/permissionSelectOption";
import selectOptionsGenerator from "@/utils/selectOptionsGenerator";
import NextMuiSelect from "../next-mui-select";
import EqualizeItems from "../equalize-items";
import NextTextFild from "../next-text-fild";

interface Props {
  defaultValues?: any;
  requireFilds: any;
  permissions: any;
  branches: any;
  register: any;
  errors: any;
}

export default function UserInputs({
  defaultValues,
  requireFilds,
  permissions,
  register,
  branches,
  errors,
}: Props) {
  const permissionsOption = selectOptionsGenerator(permissions);
  const branchesOption = selectOptionsGenerator(branches);

  return (
    <>
      <EqualizeItems>
        <NextTextFild
          label="نام"
          register={register}
          name="firstname"
          errors={errors}
          required={requireFilds?.firstname}
          defaultValue={defaultValues?.firstname}
        />
        <NextTextFild
          label="نام خانوادگی"
          register={register}
          name="lastname"
          errors={errors}
          required={requireFilds?.lastname}
          defaultValue={defaultValues?.lastname}
        />
      </EqualizeItems>
      <EqualizeItems>
        <NextTextFild
          label="شماره تماس"
          register={register}
          name="phone"
          errors={errors}
          required={requireFilds?.phone}
          defaultValue={defaultValues?.phone}
        />
        <NextTextFild
          label="کد ملی"
          register={register}
          name="idcard"
          errors={errors}
          required={requireFilds?.idcard}
          defaultValue={defaultValues?.id}
        />
      </EqualizeItems>
      <EqualizeItems>
        <NextMuiSelect
          items={permissionsOption}
          register={register}
          name="permission"
          label="سطح دسترسی"
          errors={errors}
          required={requireFilds?.permission}
          defaultValue={defaultValues?.permission}
        />
        <NextMuiSelect
          items={branchesOption}
          register={register}
          name="branch"
          label="شعبه"
          errors={errors}
          required={requireFilds?.branch}
          defaultValue={defaultValues?.branchId}
        />
      </EqualizeItems>
    </>
  );
}
