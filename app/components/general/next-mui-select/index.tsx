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
  errors?: any;
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
  errors = {},
}: Props) {
  let options;
  const error = errors[name];
  const validate = required ? { validate: (val: any) => !!val } : {};

  if (register) {
    options = register(name, validate);
  } else {
    options = { value, onChange };
  }

  return (
    <FormControl className="next-mui-select">
      <InputLabel id="next-mui-select-label">{label}</InputLabel>
      <Select
        className={`select ${error ? "invalid" : ""}`}
        labelId="next-mui-select-label"
        defaultValue={defaultValue}
        multiple={multiple}
        label={label}
        {...options}
        sx={{
          "& .MuiSvgIcon-root": {
            right: "unset",
            left: "7px",
          },
        }}
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
