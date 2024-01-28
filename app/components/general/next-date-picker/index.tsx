import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Props {
  handleChange?: any;
  defaultValue?: any;
  views?: any;
}

export default function NextDatePicker({
  defaultValue,
  handleChange,
  views,
}: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      <DatePicker
        onChange={handleChange}
        defaultValue={defaultValue}
        {...(views ? { views: views } : {})}
        className="datepicker"
      />
    </LocalizationProvider>
  );
}
