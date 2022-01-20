import {
  fetchMostRecentOrders,
  fetchTotalOrders,
  fetchTotalOrdersForCurrentMonth,
  fetchTotalOrdersInProgress,
  getTotalRevenue,
} from "../dashboard.service";

describe("Testing dashboard services", () => {
  test("fetch total order", async () => {
    const results = await fetchTotalOrders();
    expect(results).toEqual(1000);
  }, 10000);

  test("fetch total orders this month", async () => {
    const results = await fetchTotalOrdersForCurrentMonth();
    expect(results).toBeGreaterThanOrEqual(0);
  }, 10000);

  test("fetch total orders in progress", async () => {
    const results = await fetchTotalOrdersInProgress();
    expect(results).toBeGreaterThanOrEqual(0);
  }, 10000);

  test("fetch total revenue", async () => {
    const results = await getTotalRevenue();
    expect(results).toBeGreaterThan(0);
  }, 10000);

  test("fetch most recent orders", async () => {
    const results = await fetchMostRecentOrders();
    expect(results?.length).toEqual(100);
  }, 10000);
});
