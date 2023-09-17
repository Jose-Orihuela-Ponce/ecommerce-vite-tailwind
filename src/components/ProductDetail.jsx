import React from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { Context } from "../Utilities/Context";

export default function ProductDetail() {
  const { setIsProductDatailOpen, detailProdcutCard } =
    React.useContext(Context);

  const { title, category, price, description } = detailProdcutCard;
  return (
    <aside className="fixed z-10 right-1 top-6 w-60 mt-14 h-full ring-1 ring-gray-400 bg-white  rounded-md">
      <div className="flex justify-between items-center p-4">
        <h2 className="font-normal text-lg">Product Detail</h2>
        <XCircleIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => setIsProductDatailOpen(false)}
        />
      </div>

      <figure className="px-3">
        <img
          className="w-full h-full object-cover rounded-lg cursor-pointer"
          src={category.image}
          alt={title}
        />
      </figure>
      <p className="flex flex-col px-6">
        <span className="text-xl font-medium mb-2">${price}</span>
        <span className="text-sm font-medium">{title}</span>
        <span className="text-sm font-light">{description}</span>
      </p>
    </aside>
  );
}
