import { useEffect, useState } from "react";
import { BackgroundColor } from "../../constants";
import { fetchTotalOrdersForCurrentMonth } from "../../services/dashboard.service";
import SnapshotCard from "./SnapshotCard";

const CurrentMonthOrdersSnapshot = (): JSX.Element => {
  const [totalOrders, setTotalOrders] = useState<number>(0);

  useEffect(() => {
    getTotalOrdersForCurrentMonth();
  }, []);

  const getTotalOrdersForCurrentMonth = async (): Promise<void> => {
    try {
      const results = await fetchTotalOrdersForCurrentMonth();
      setTotalOrders(results);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SnapshotCard
      title="Total Orders For The Month"
      value={totalOrders}
      cardColor={BackgroundColor.INDIGO}
      icon={<i className="fa fa-shopping-cart fa-2x fa-inverse"></i>}
    />
  );
};

export default CurrentMonthOrdersSnapshot;
