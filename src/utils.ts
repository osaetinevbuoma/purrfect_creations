export const formatCurrency = (price: number): string =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(price);

export const parseOrderStatus = (order_status: string): string => {
  const status: {[key: string]: string} = {
    cancelled: 'Cancelled',
    shipped: 'Shipped',
    placed: 'Placed',
    in_progress: 'In Progress'
  };

  return status[order_status];
}
