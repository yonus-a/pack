import { FormGroup, TextField } from "@mui/material";
import "./styles.scss";

interface Props {
  required?: boolean;
  defaultValue?: any;
  register?: any;
  label: string;
  onChange?: any;
  errors?: any;
  value?: any;
  name: any;
  rows?: any;
}

export default function NextTextarea({
  defaultValue,
  register,
  required,
  onChange,
  errors = {},
  value,
  name,
  label,
  rows = 1,
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
        label={label}
        {...options}
        multiline
        minRows={rows}
      />
      {error && <p className="error">{label} نمیتواند خالی باشد</p>}
    </FormGroup>
  );
}
