import { FormGroup, TextField } from "@mui/material";
import "./styles.scss";

interface Props {
  required?: boolean;
  defaultValue?: any;
  register?: any;
  type?: string;
  label?: string;
  onChange?: any;
  className?: any;
  errors?: any;
  value?: any;
  name?: any;
  min?: any;
  max?: any;
}

export default function NextTextFild({
  defaultValue,
  type = "text",
  register,
  required,
  onChange,
  className,
  errors = {},
  value,
  name = "",
  label = "",
  min,
  max,
}: Props) {
  const error = errors[name];
  const requiredErr = error?.type === "required";
  const lengthErr = error?.type === "min" && error?.type === "max";
  let options;

  if (register) {
    options = register(name, { required: required, min, max });
  } else {
    options = { value, onChange, name };
  }

  return (
    <FormGroup className={`next-text-fild ${error ? "invalid" : ""}`}>
      <TextField
        defaultValue={defaultValue}
        className={className}
        label={label}
        {...options}
        type={type}
      />
      {requiredErr && <p className="error">{label} نمیتواند خالی باشد</p>}
      {lengthErr && <p className="error">{label} نامعتبر است</p>}
    </FormGroup>
  );
}
