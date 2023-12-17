import React from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../Utilities/Context';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

export default function MyOrder() {
  const { checkout } = React.useContext(Context);

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') index = checkout.length - 1;
  console.log(index);

  return (
    <article className="grid place-content-center w-full h-screen">
      <Link to={'/MyOrders'} className="absolute left-80">
        <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
      </Link>
      <h1> Myorder</h1>
      <div className="flex flex-col items-center justify-center w-56">
        {checkout[index]?.products?.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-2 w-56"
          >
            <div className="flex items-center gap-2">
              <figure className="w-12 h-12">
                <img
                  className="w-full h-full rounded-lg object-cover"
                  src={item.category.image}
                  alt={item.title}
                />
              </figure>
              <p className="text-sm font-light">{item.title}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
