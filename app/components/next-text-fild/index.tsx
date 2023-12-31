import { FormGroup, TextField } from "@mui/material";
import "./styles.scss";

interface Props {
  register: any;
  name: any;
  errors: any;
  type?: string;
  label: string;
  required?: boolean;
  defaultValue?: any;
}

export default function NextTextFild({
  register,
  name,
  errors,
  type = "text",
  label,
  required,
  defaultValue,
}: Props) {
  const error = errors[name];
  return (
    <FormGroup className={`next-text-fild ${error ? "invalid" : ""}`}>
      <TextField
        label={label}
        {...register(name, { required })}
        defaultValue={defaultValue}
        type={type}
      />
      {error && <p className="error">{label} نمیتواند خالی باشد</p>}
    </FormGroup>
  );
}
