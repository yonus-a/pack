import { Checkbox, FormControlLabel } from "@mui/material";

interface Props {
  defaultChecked?: any;
  register?: any;
  label: string;
  onChange?: any;
  value?: any;
  name: any;
}

export default function NextCheckbox({
  defaultChecked,
  register,
  onChange,
  value,
  name,
  label,
}: Props) {
  let options;

  if (register) {
    options = register(name);
  } else {
    options = { value, onChange, name };
  }

  return (
    <FormControlLabel
      control={<Checkbox {...options} defaultChecked={defaultChecked} />}
      label={label}
    />
  );
}
