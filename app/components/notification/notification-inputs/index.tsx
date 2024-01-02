import NextTextFild from "../../general/next-text-fild";
import NextTextarea from "../../general/next-textarea";
import NextCheckbox from "../../general/next-checkbox";
import "./styles.scss";

interface Props {
  defaultValues?: any;
  requireFilds: any;
  register: any;
  errors: any;
}

export default function NotificationInputs({
  defaultValues,
  requireFilds,
  register,
  errors,
}: Props) {
  return (
    <>
      <NextTextFild
        register={register}
        name="title"
        errors={errors}
        label="عنوان"
        required={requireFilds?.title}
        defaultValue={defaultValues?.title}
      />
      <NextTextarea
        register={register}
        name="msg"
        errors={errors}
        label="متن"
        required={requireFilds?.msg}
        defaultValue={defaultValues?.msg}
        rows={3}
      />
      <NextCheckbox
        register={register}
        name="sendSms"
        label="ارسال پیامک"
        defaultChecked={!!defaultValues?.sendSms}
      />
    </>
  );
}
