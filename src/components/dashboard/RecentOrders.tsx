import { useEffect, useState } from "react";
import IOrder from "../../interfaces/IOrder";
import { fetchMostRecentOrders } from "../../services/dashboard.service";
import { formatCurrency, parseOrderStatus } from "../../utils";

const RecentOrders = (): JSX.Element => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    getRecentOrders();
  }, []);

  const getRecentOrders = async (): Promise<void> => {
    try {
      const results = await fetchMostRecentOrders();
      setOrders(results as IOrder[]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full md:w-full xl:w-full p-6">
      <div className="bg-white border-transparent rounded-lg shadow-xl">
        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
          <h2 className="font-bold uppercase text-gray-600">Recent Orders</h2>
        </div>
        <div className="p-5">
          <table className="w-full p-5 text-gray-700">
            <thead>
              <tr>
                <th className="text-left text-blue-900">Order ID</th>
                <th className="text-left text-blue-900">Order Placed</th>
                <th className="text-left text-blue-900">Product Name</th>
                <th className="text-left text-blue-900">Price</th>
                <th className="text-left text-blue-900">Customer Name</th>
                <th className="text-left text-blue-900">Customer Email</th>
                <th className="text-left text-blue-900">Order Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr>
                  <td>{order.order_id}</td>
                  <td>{order.order_placed}</td>
                  <td>{order.product_name}</td>
                  <td>{formatCurrency(order.price)}</td>
                  <td>
                    {order.first_name} {order.last_name}
                  </td>
                  <td>{order.email}</td>
                  <td>{parseOrderStatus(order.order_status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecentOrders;
