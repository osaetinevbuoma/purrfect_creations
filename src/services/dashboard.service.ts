import Airtable, { FieldSet } from "airtable";
import { Records } from "airtable/lib/records";
import IOrder from "../interfaces/IOrder";

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(
  process.env.REACT_APP_AIRTABLE_BASE_ID as string
);

export const fetchTotalOrders = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    let results: Records<FieldSet> = [];

    base("Orders")
      .select({})
      .eachPage(
        (records, fetchNextPage) => {
          results = [...results, ...records];
          fetchNextPage();
        },
        (err) => {
          if (err) reject(err);
          resolve(results.length);
        }
      );
  });
};

export const fetchTotalOrdersForCurrentMonth = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    let results: Records<FieldSet> = [];

    base("Orders")
      .select({
        filterByFormula: "MONTH({order_placed}) = MONTH(NOW())",
      })
      .eachPage(
        (records, fetchNextPage) => {
          results = [...results, ...records];
          fetchNextPage();
        },
        (err) => {
          if (err) reject(err);
          resolve(results.length);
        }
      );
  });
};

export const fetchTotalOrdersInProgress = () => {
  return new Promise((resolve, reject) => {
    let results: Records<FieldSet> = [];

    base("Orders")
      .select({
        filterByFormula: "{order_status} = 'in_progress'",
      })
      .eachPage(
        (records, fetchNextPage) => {
          results = [...results, ...records];
          fetchNextPage();
        },
        (err) => {
          if (err) reject(err);
          resolve(results.length);
        }
      );
  });
};

export const getTotalRevenue = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    let results: Records<FieldSet> = [];

    base("Orders")
      .select({
        fields: ["price"],
      })
      .eachPage(
        (records, fetchNextPage) => {
          results = [...results, ...records];
          fetchNextPage();
        },
        (err) => {
          if (err) reject(err);

          let totalPrice = 0;
          results.forEach((record) => (totalPrice += record.get("price") as number));
          resolve(totalPrice);
        }
      );
  });
};

export const fetchMostRecentOrders = (): Promise<IOrder[] | undefined> => {
  return new Promise((resolve, reject) => {
    base("Orders")
      .select({
        sort: [{ field: "order_placed", direction: "desc" }],
      })
      .firstPage((err, records) => {
        if (err) reject(err);

        const orders = records?.map(record => {
          let order: IOrder = {} as IOrder;
          order.order_id = record.get('order_id') as number;
          order.order_placed = record.get('order_placed') as string;
          order.product_name = record.get('product_name') as string;
          order.price = record.get('price') as number;
          order.first_name = record.get('first_name') as string;
          order.last_name = record.get('last_name') as string;
          order.email = record.get('email') as string;
          order.order_status = record.get('order_status') as string;

          return order;
        });

        resolve(orders);
      });
  });
};
