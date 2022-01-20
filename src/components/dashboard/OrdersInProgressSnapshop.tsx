import { useEffect, useState } from "react";
import { BackgroundColor } from "../../constants";
import { fetchTotalOrdersInProgress } from "../../services/dashboard.service";
import SnapshotCard from "./SnapshotCard";

const OrdersInProgressSnapshot = (): JSX.Element => {
  const [totalOrders, setTotalOrders] = useState<number>(0);

  useEffect(() => {
    getOrdersInProgress();
  }, []);

  const getOrdersInProgress = async (): Promise<void> => {
    try {
      const results = await fetchTotalOrdersInProgress();
      setTotalOrders(results as number);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SnapshotCard
      title="Total Orders in Progress"
      value={totalOrders}
      cardColor={BackgroundColor.YELLOW}
      icon={<i className="fa fa-cart-plus fa-2x fa-inverse"></i>}
    />
  );
}

export default OrdersInProgressSnapshot;
