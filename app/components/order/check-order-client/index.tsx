"use client";

import ProductCategoriesFilter from "../product-categories-filter";
import conformOrder from "@/server-actions/order/conformOrder";
import updateFactor from "@/server-actions/order/updateFactor";
import rejectOrder from "@/server-actions/order/rejectOrder";
import Container from "../../general/container";
import EditOrderForm from "../edit-order-form";
import { useRouter } from "next/navigation";
import OrderInfo from "../order-info";
import Link from "next/link";
import "./styles.scss";

interface Props {
  categories: any;
  trucks: any;
  order: any;
}

export default function CheckOrderClient({ categories, order, trucks }: Props) {
  const router = useRouter();

  const handleRejectOrder = async () => {
    try {
      await rejectOrder(order.id);
      router.refresh();
      router.push("/panel/order-managment");
    } catch (e) {}
  };

  const handleConfirmOrder = async () => {
    try {
      await conformOrder(order.id);
      router.refresh();
      router.push("/panel/order-managment");
    } catch (e) {}
  };

  const handleUpdateFactor = async ({ target }: any, item: any) => {
    try {
      const factor = +target.value;
      const number = factor * item.unit;
      const totalWeight = number * +item.weight;

      await updateFactor({
        id: item.id,
        totalWeight,
        factor,
        number,
      });

      router.refresh();
    } catch (e) {}
  };

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
          <EditOrderForm
            handleUpdateFactor={handleUpdateFactor}
            order={order}
          />
        </Container>
      </div>
      <OrderInfo order={order} trucks={trucks} />
      <div className="footer">
        <button className="btn" onClick={handleRejectOrder}>
          رد
        </button>
        <button className="btn" onClick={handleConfirmOrder} form="addDriver">
          تایید
        </button>
        <Link href="/panel/order-managment" className="btn">
          بازگشت
        </Link>
      </div>
    </div>
  );
}
