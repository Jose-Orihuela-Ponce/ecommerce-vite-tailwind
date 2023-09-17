import PropTypes from "prop-types";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Context } from "../Utilities/Context";

export default function Card({ data }) {
  const { title, category, price } = data;

  const {
    setIsProductDatailOpen,
    setDetailProductCard,
    cardProducts,
    setCardProducts,
    setIsCheckoutProductOpen,
  } = React.useContext(Context);

  return (
    <div className="bg-white w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg cursor-pointer"
          src={category.image}
          alt={title}
          onClick={() => {
            setIsProductDatailOpen(true);
            setDetailProductCard(data);
          }}
        />
        <PlusIcon
          className="absolute top-2 right-2 bg-white w-6 h-6 text-center rounded-full cursor-pointer"
          onClick={() => {
            setCardProducts([...cardProducts, data]);
            setIsCheckoutProductOpen(true);
          }}
        />
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-md font-medium">${price}</span>
      </p>
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.object,
};
