import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./styles.scss";

interface Props {
  items: any;
  label?: string;
  defaultValue?: any;
  register?: any;
  multiple?: boolean;
  value?: any;
  onChange?: any;
  name?: string;
  required?: boolean;
  errors: any;
}

export default function NextMuiSelect({
  items,
  label,
  register,
  defaultValue,
  name = "",
  multiple,
  value,
  onChange,
  required,
  errors,
}: Props) {
  let options;
  const error = errors[name];

  if (register) {
    options = register(name, { required });
  } else {
    options = { value, onChange };
  }

  return (
    <FormControl>
      <InputLabel id="next-mui-select-label">{label}</InputLabel>
      <Select
        className={`select ${error ? "invalid" : ""}`}
        defaultValue={defaultValue}
        multiple={multiple}
        onChange={onChange}
        labelId="next-mui-select-label"
        label={label}
        {...options}
      >
        {items.map(({ label, value }: any) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {error && <p className="error">{label} نمیتواند خالی باشد</p>}
    </FormControl>
  );
}
