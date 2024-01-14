import SearchFilter from "../../general/search-filter";
import DateFilter from "../../general/date-filter";
import "./styles.scss";

interface Props {
  date: any;
}

export default function FilterOrders({ date }: Props) {
  return (
    <div className="filter-orders">
      <SearchFilter />
      <DateFilter defaultDate={date} />
    </div>
  );
}
