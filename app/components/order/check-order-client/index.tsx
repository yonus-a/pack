import ProductCategoriesFilter from "../product-categories-filter";
import Container from "../../general/container";
import EditOrderForm from "../edit-order-form";
import OrderInfo from "../order-info";
import Link from "next/link";
import "./styles.scss";

interface Props {
  categories: any;
  stock: any;
  order: any;
  date: any;
}

export default function CheckOrderClient({
  categories,
  order,
  stock,
  date,
}: Props) {
  return (
    <div className="check-order-client">
      <div className="main">
        <Container>
          <div className="filters">
            <ProductCategoriesFilter categories={categories} />
            <Link className="btn" href={`/panel/check-order/${order.id}`}>
              نمایش همه
            </Link>
          </div>
          <EditOrderForm order={order} stock={stock} date={date} />
        </Container>
      </div>
      <OrderInfo order={order} />
      <div className="footer">
        <button className="btn">رد</button>
        <button className="btn">تایید</button>
        <Link href="/panel/order-managment" className="btn">
          بازگشت
        </Link>
      </div>
    </div>
  );
}
