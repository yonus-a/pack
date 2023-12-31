import provincesSelectOption from "@/utils/provincesSelectOption";
import NextMuiSelect from "../next-mui-select";
import EqualizeItems from "../equalize-items";
import NextTextFild from "../next-text-fild";
import "./styles.scss";

interface Props {
  defaultValues?: any;
  requireFilds: any;
  register: any;
  errors: any;
}

export default function BranchInputs({
  defaultValues,
  requireFilds,
  register,
  errors,
}: Props) {
  return (
    <>
      <NextTextFild
        register={register}
        name="name"
        errors={errors}
        label="نام شعبه"
        required={requireFilds?.name}
        defaultValue={defaultValues?.name}
      />
      <EqualizeItems>
        <NextMuiSelect
          name="province"
          items={provincesSelectOption}
          register={register}
          errors={errors}
          required={requireFilds?.province}
          defaultValue={defaultValues?.province}
          label="استان"
        />
        <NextTextFild
          register={register}
          name="city"
          errors={errors}
          label="شهر"
          required={requireFilds?.city}
          defaultValue={defaultValues?.city}
        />
      </EqualizeItems>
      <NextTextFild
        register={register}
        name="address"
        errors={errors}
        label="آدرس"
        required={requireFilds?.address}
        defaultValue={defaultValues?.address}
      />
      <EqualizeItems>
        <NextTextFild
          register={register}
          name="distanceToCentralWarehouse"
          errors={errors}
          type="number"
          label="فاصله تا انبار مرکزی"
          required={requireFilds?.distanceToCentralWarehouse}
          defaultValue={defaultValues?.distance_to_central_warehouse}
        />
        <NextTextFild
          register={register}
          name="distanceToFactory"
          errors={errors}
          label="فاصله تا کارخانه"
          type="number"
          required={requireFilds?.distanceToFactory}
          defaultValue={defaultValues?.distance_to_factory}
        />
      </EqualizeItems>
    </>
  );
}
