"use client";

import updateFactorWithCheck from "@/server-actions/order/updateFactorWithCheck";
import ProductCategoriesFilter from "../product-categories-filter";
import cancelOrder from "@/server-actions/order/cancelOrder";
import Container from "../../general/container";
import EditOrderForm from "../edit-order-form";
import { useRouter } from "next/navigation";
import Confirm from "../../general/confirm";
import { toast } from "react-hot-toast";
import Link from "next/link";
import "./styles.scss";

interface Props {
  categories: any;
  order: any;
}

export default function EditOrderClient({ categories, order }: Props) {
  const router = useRouter();

  const handleCancelOrder = async () => {
    try {
      await cancelOrder(order.id);
      router.refresh();
      router.push("/panel/show-orders");
    } catch (e) {}
  };

  const handleUpdateFactor = async ({ target }: any, item: any) => {
    try {
      const factor = +target.value;
      const number = factor * item.unit;
      const totalWeight = number * +item.weight;

      await updateFactorWithCheck({
        id: item.id,
        totalWeight,
        factor,
        number,
      });

      router.refresh();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <div className="edit-order-client">
      <div className="main">
        <Container>
          <div className="filters">
            <ProductCategoriesFilter categories={categories} />
            <Link className="btn" href={`/panel/edit-order/${order.id}`}>
              نمایش همه
            </Link>
          </div>
          <EditOrderForm
            handleUpdateFactor={handleUpdateFactor}
            order={order}
          />
        </Container>
      </div>
      <div className="footer">
        {/* <Confirm onOk={handleCancelOrder} className="btn">
          لغو
        </Confirm> */}
        <Link href="/panel/show-orders" className="btn">
          بازگشت
        </Link>
      </div>
    </div>
  );
}
