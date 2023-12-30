import { FormGroup, TextField } from "@mui/material";
import "./styles.scss";

interface Props {
  register: any;
  name: any;
  errors: any;
  type?: string;
  label: string;
  required?: boolean;
}

export default function NextTextFild({
  register,
  name,
  errors,
  type = "text",
  label,
  required,
}: Props) {
  const error = errors[name];
  return (
    <FormGroup className={`next-text-fild ${error ? "invalid" : ""}`}>
      <TextField label={label} {...register(name, { required })} type={type} />
      {error && <p className="error">{label} نمیتواند خالی باشد</p>}
    </FormGroup>
  );
}
