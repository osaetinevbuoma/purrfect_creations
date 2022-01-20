import { useEffect, useState } from "react";
import { BackgroundColor } from "../../constants";
import { getTotalRevenue } from "../../services/dashboard.service";
import { formatCurrency } from "../../utils";
import SnapshotCard from "./SnapshotCard";

const RevenueSnapshot = (): JSX.Element => {
  const [revenue, setRevenue] = useState<number>(0);

  useEffect(() => {
    fetchTotalRevenue();
  }, []);

  const fetchTotalRevenue = async (): Promise<void> => {
    try {
      const totalRevenue = await getTotalRevenue();
      setRevenue(totalRevenue);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SnapshotCard
      title="Total Revenue"
      value={formatCurrency(revenue)}
      cardColor={BackgroundColor.GREEN}
      icon={<i className="fa fa-wallet fa-2x fa-inverse"></i>}
    />
  );
};

export default RevenueSnapshot;
