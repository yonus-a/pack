import SearchFilter from "../../general/search-filter";
import DateFilter from "../../general/date-filter";
import Link from "next/link";
import "./styles.scss";

interface Props {
  date: any;
}

export default function FilterOrders({ date }: Props) {
  return (
    <div className="filter-orders">
      <SearchFilter />
      <DateFilter defaultDate={date} />
      <Link className="btn" href={"/panel/order-managment"}>
        نمایش همه
      </Link>
    </div>
  );
}
