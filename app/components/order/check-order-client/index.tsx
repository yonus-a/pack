import OrderInfo from "../order-info";
import "./styles.scss";

interface Props {
  order: any;
}

export default function CheckOrderClient({ order }: Props) {
  return (
    <div className="check-order-client">
      <OrderInfo order={order} />
    </div>
  );
}
