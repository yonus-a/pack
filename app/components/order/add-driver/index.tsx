import selectOptionsGenerator from "@/utils/selectOptionsGenerator";
import NextMuiSelect from "../../general/next-mui-select";
import { useFieldArray, useForm } from "react-hook-form";
import NextTextFild from "../../general/next-text-fild";
import Icon from "../../general/icon";
import "./styles.scss";

interface Props {
  trucks: any;
}

export default function AddDriver({ trucks }: Props) {
  const { control, register } = useForm({});
  const truckOption = selectOptionsGenerator(trucks);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "driver",
  });

  return (
    <div className="add-driver">
      <form>
        {fields.map((field, index) => (
          <div key={field.id} className="form-wrapper">
            <div className="g1">
              <h3>مشخصات راننده</h3>
              <button onClick={() => remove(index)} className="remove-btn">
                <Icon name="delete" />
              </button>
            </div>
            <NextTextFild
              name={`driver.${index}.name`}
              register={register}
              label="نام راننده"
            />
            <NextTextFild
              name={`driver.${index}.phone`}
              register={register}
              label="شماره تلفن"
            />
            <NextTextFild
              name={`driver.${index}.numberplate`}
              register={register}
              label="شماره پلاک"
            />
            <NextMuiSelect
              name={`driver.${index}.truck`}
              items={truckOption}
              register={register}
              label="نوع ماشین"
            />
          </div>
        ))}
      </form>
      <button onClick={() => append({})} className="add-btn">
        <Icon name="add" />
      </button>
    </div>
  );
}
