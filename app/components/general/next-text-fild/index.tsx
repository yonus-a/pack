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
}: Props) {
  const error = errors[name];
  let options;

  if (register) {
    options = register(name, required);
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
      {error && <p className="error">{label} نمیتواند خالی باشد</p>}
    </FormGroup>
  );
}
