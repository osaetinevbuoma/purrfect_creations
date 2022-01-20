import { useEffect, useState } from "react";
import { BackgroundColor } from "../../constants";
import { fetchTotalOrders } from "../../services/dashboard.service";
import SnapshotCard from "./SnapshotCard";

const TotalOrdersSnapshop = (): JSX.Element => {
  const [totalOrders, setTotalOrders] = useState<number>(0);

  useEffect(() => {
    getTotalOrders();
  }, []);

  const getTotalOrders = async (): Promise<void> => {
    try {
      const results = await fetchTotalOrders();
      setTotalOrders(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SnapshotCard
      title="Total Orders"
      value={totalOrders}
      cardColor={BackgroundColor.BLUE}
      icon={<i className="fa fa-shopping-cart fa-2x fa-inverse"></i>}
    />
  );
};

export default TotalOrdersSnapshop;
