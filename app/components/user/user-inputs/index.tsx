import selectOptionsGenerator from "@/utils/selectOptionsGenerator";
import NextMuiSelect from "../../general/next-mui-select";
import EqualizeItems from "../../general/equalize-items";
import NextTextFild from "../../general/next-text-fild";
import { useState, useMemo } from "react";

interface Props {
  defaultValues?: any;
  requireFilds: any;
  permissions: any;
  setValue: any;
  branches: any;
  register: any;
  errors: any;
}

export default function UserInputs({
  defaultValues = {},
  requireFilds,
  permissions,
  setValue,
  register,
  branches,
  errors,
}: Props) {
  const [permission, setPermission] = useState(defaultValues.permission);
  const [showBranchSelect, setShowBranchSelect] = useState(false);
  const permissionsOption = selectOptionsGenerator(permissions);
  const branchesOption = selectOptionsGenerator(branches);

  useMemo(() => {
    setValue("permission", permission);
    setShowBranchSelect(permission === permissions[0].id);
  }, [permission]);

  const hnaldePermissionChange = ({ target }: any) => {
    setPermission(target.value);
  };

  return (
    <>
      <EqualizeItems>
        <NextMuiSelect
          items={permissionsOption}
          defaultValue={permission}
          onChange={hnaldePermissionChange}
          label="سطح دسترسی"
        />
        {showBranchSelect && (
          <NextMuiSelect
            defaultValue={defaultValues.branchId}
            required={requireFilds.branch}
            items={branchesOption}
            register={register}
            errors={errors}
            name="branch"
            label="شعبه"
          />
        )}
      </EqualizeItems>
      <EqualizeItems>
        <NextTextFild
          defaultValue={defaultValues.firstname}
          required={requireFilds.firstname}
          register={register}
          name="firstname"
          errors={errors}
          label="نام"
        />
        <NextTextFild
          defaultValue={defaultValues.lastname}
          required={requireFilds.lastname}
          label="نام خانوادگی"
          register={register}
          errors={errors}
          name="lastname"
        />
      </EqualizeItems>
      <EqualizeItems>
        <NextTextFild
          defaultValue={defaultValues.phone}
          required={requireFilds.phone}
          register={register}
          label="شماره تماس"
          errors={errors}
          name="phone"
        />
        <NextTextFild
          defaultValue={defaultValues.id}
          required={requireFilds.idcard}
          register={register}
          errors={errors}
          label="کد ملی"
          name="idcard"
        />
      </EqualizeItems>
    </>
  );
}
