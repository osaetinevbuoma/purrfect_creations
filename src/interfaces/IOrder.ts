interface IOrder {
  order_id: number;
  order_placed: string | Date;
  product_name: string;
  price: number;
  first_name: string;
  last_name: string;
  address: string;
  email: string;
  order_status: string;
}

export default IOrder;
