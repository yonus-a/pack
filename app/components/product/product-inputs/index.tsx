import selectOptionsGenerator from "@/utils/selectOptionsGenerator";
import NextMuiSelect from "../../general/next-mui-select";
import EqualizeItems from "../../general/equalize-items";
import AddProductCategory from "../add-product-category";
import NextTextFild from "../../general/next-text-fild";
import AddProductUnit from "../add-product-unit";

interface Props {
  defaultValues?: any;
  requireFilds: any;
  categories: any;
  register: any;
  errors: any;
  units: any;
  types: any;
}

export default function ProductInputs({
  defaultValues = {},
  requireFilds,
  categories,
  register,
  errors,
  types,
  units,
}: Props) {
  const categoriesOption = selectOptionsGenerator(categories);
  const typesOption = selectOptionsGenerator(types);
  const unitsOption = selectOptionsGenerator(units);

  return (
    <>
      <NextTextFild
        defaultValue={defaultValues.name}
        required={requireFilds.name}
        register={register}
        errors={errors}
        label="نام"
        name="name"
      />
      <EqualizeItems>
        <NextTextFild
          defaultValue={defaultValues.id}
          required={requireFilds.id}
          register={register}
          label="کد یکتا"
          errors={errors}
          name="id"
        />
        <div className="g1">
          <NextMuiSelect
            defaultValue={defaultValues.unitId}
            required={requireFilds.unit}
            items={unitsOption}
            register={register}
            label="واحد سنجش"
            errors={errors}
            name="unit"
          />
          <AddProductUnit />
        </div>
      </EqualizeItems>
      <EqualizeItems>
        <div className="g1">
          <NextMuiSelect
            defaultValue={defaultValues.categoryId}
            required={requireFilds.category}
            items={categoriesOption}
            register={register}
            label="دسته بندی"
            name="category"
            errors={errors}
          />
          <AddProductCategory />
        </div>
        <NextMuiSelect
          defaultValue={defaultValues.typeId}
          required={requireFilds.type}
          items={typesOption}
          register={register}
          errors={errors}
          label="نوع"
          name="type"
        />
      </EqualizeItems>
    </>
  );
}
