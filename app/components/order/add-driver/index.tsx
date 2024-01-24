import selectOptionsGenerator from "@/utils/selectOptionsGenerator";
import NextMuiSelect from "../../general/next-mui-select";
import addDriver from "@/server-actions/driver/addDriver";
import { useFieldArray, useForm } from "react-hook-form";
import NextTextFild from "../../general/next-text-fild";
import { toast } from "react-hot-toast";
import Icon from "../../general/icon";
import "./styles.scss";

interface Props {
  orderId: string;
  drivers: any;
  trucks: any;
}

export default function AddDriver({ trucks, orderId, drivers }: Props) {
  const truckOption = selectOptionsGenerator(trucks);

  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      driver: drivers,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "driver",
  });

  const onSubmit = async (data: any) => {
    try {
      await addDriver({ ...data, orderId });
    } catch (e) {
      toast.error("مشکلی در ثبت راننده پیش آمده !");
    }
  };

  return (
    <div className="add-driver">
      <form id="addDriver" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field: any, index) => (
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
              name={`driver.${index}.truckId`}
              defaultValue={field.truckId}
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
