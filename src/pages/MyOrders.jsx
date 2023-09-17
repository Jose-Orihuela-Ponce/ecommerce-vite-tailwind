import Layout from "../components/Layout";
import React from "react";
import { Context } from "../Utilities/Context";
import OrdersCards from "../components/OrdersCards";
import { Link } from "react-router-dom";

export default function MyOrders() {
  const { checkout } = React.useContext(Context);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1>My Orders</h1>
      </div>
      {checkout.map((item, index) => (
        <Link key={item.date} to={`/MyOrder/${index}`}>
          <OrdersCards
            totalProducts={item.totalProducts}
            totalPriceCheck={item.totalPriceCheck}
            date={item.date}
          />
        </Link>
      ))}
    </Layout>
  );
}
