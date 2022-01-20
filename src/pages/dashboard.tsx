import CurrentMonthOrdersSnapshot from "../components/dashboard/CurrentMonthOrdersSnapshop";
import OrdersInProgressSnapshot from "../components/dashboard/OrdersInProgressSnapshop";
import RecentOrders from "../components/dashboard/RecentOrders";
import RevenueSnapshot from "../components/dashboard/RevenueSnapshot";
import TotalOrdersSnapshop from "../components/dashboard/TotalOrdersSnapshop";
import PageLayout from "../components/layout/PageLayout";

const Dashboard = (): JSX.Element => {
  return (
    <PageLayout>
      <div className="bg-gray-800 pt-3">
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
          <h1 className="font-bold pl-2">Dashboard</h1>
        </div>
      </div>

      <div className="flex flex-wrap">
        <RevenueSnapshot />
        <TotalOrdersSnapshop />
        <CurrentMonthOrdersSnapshot />
        <OrdersInProgressSnapshot />
      </div>

      <div className="flex flex-row flex-wrap flex-grow mt-2">
        <RecentOrders />
      </div>
    </PageLayout>
  );
};

export default Dashboard;
