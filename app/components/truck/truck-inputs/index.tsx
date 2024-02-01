import NextTextFild from "@/app/components/general/next-text-fild";
import EqualizeItems from "../../general/equalize-items";

interface Props {
  requiredFilds: any;
  defaultValues?: any;
  register: any;
  errors: any;
}

export default function UserInputs({
  defaultValues = {},
  requiredFilds,
  register,
  errors,
}: Props) {
  return (
    <>
      <NextTextFild
        defaultValue={defaultValues.name}
        required={requiredFilds.name}
        register={register}
        errors={errors}
        label="نام"
        name="name"
      />
      <EqualizeItems>
        <NextTextFild
          defaultValue={defaultValues.tonnage}
          required={requiredFilds.tonnage}
          register={register}
          errors={errors}
          name="tonnage"
          label="تناژ"
        />
        <NextTextFild
          defaultValue={defaultValues.image}
          required={requiredFilds.image}
          register={register}
          errors={errors}
          name="image"
          type="file"
        />
      </EqualizeItems>
    </>
  );
}
