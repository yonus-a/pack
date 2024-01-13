import { FormControlLabel, Switch } from "@mui/material";

interface Props {
  onChange: any;
  label?: string;
}

export default function NextSwitch({ onChange, label = "" }: Props) {
  return (
    <FormControlLabel control={<Switch onChange={onChange} />} label={label} />
  );
}
