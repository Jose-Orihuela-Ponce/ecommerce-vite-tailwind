import React from "react";
import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { Context } from "../Utilities/Context";
import OrderCard from "./OrderCard";

export default function CheckoutSideMenu() {
  const {
    setIsCheckoutProductOpen,
    cardProducts,
    setCardProducts,
    totalPrice,
    checkout,
    setCheckout,
  } = React.useContext(Context);
  function deleteProduct(serchedValue) {
    let productIndex = cardProducts.findIndex(
      (item) => item.id === serchedValue.id
    );
    const newArrayProduct = [...cardProducts];
    newArrayProduct.splice(productIndex, 1);
    setCardProducts(newArrayProduct);
  }
  function addingCheckout() {
    const currentDate = new Date();
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    const formattedDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    const ordersCheckout = {
      date: `${formattedTime}  ${formattedDate}`,
      products: cardProducts,
      totalProducts: cardProducts.length,
      totalPriceCheck: totalPrice,
    };
    setCheckout([...checkout, ordersCheckout]);
    setCardProducts([]);
  }
  React.useEffect(() => {
    console.log(checkout);
  }, [checkout]);
  return (
    <aside className="fixed z-10 right-1 top-6 w-64 mt-14 h-full ring-1 ring-gray-400 bg-white  rounded-md overflow-y-scroll">
      <div className="flex justify-between items-center p-4 ">
        <h2 className="font-normal text-lg">My Order</h2>
        <XCircleIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => setIsCheckoutProductOpen(false)}
        />
      </div>
      {cardProducts.map((item) => (
        <OrderCard key={item.id} product={item} deleteProduct={deleteProduct} />
      ))}
      <footer className="px-3 py-4">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total</span>
          <span className="font-medium text-xl">${totalPrice}</span>
        </p>
        <Link to="/MyOrder/last">
          <button
            className="w-full bg-black py-3 text-white rounded"
            onClick={addingCheckout}
          >
            Checkout
          </button>
        </Link>
      </footer>
    </aside>
  );
}
