import NavItem from './NavItem';
import React from 'react';
import { Context } from '../Utilities/Context';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const { count } = React.useContext(Context);
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className="flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light bg-white border-b-[1px] border-gray-500">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavItem to="/">Shop</NavItem>
        </li>
        <li>
          <NavItem activeStyle={activeStyle} to="/">
            All
          </NavItem>
        </li>
        <li>
          <NavItem activeStyle={activeStyle} to="/clothes">
            Clothes
          </NavItem>
        </li>
        <li>
          <NavItem activeStyle={activeStyle} to="/electronics">
            Electronics
          </NavItem>
        </li>
        <li>
          <NavItem activeStyle={activeStyle} to="/miscellaneous">
            Miscellaneous
          </NavItem>
        </li>
        <li>
          <NavItem activeStyle={activeStyle} to="/shoes">
            Shoes
          </NavItem>
        </li>
        <li>
          <NavItem activeStyle={activeStyle} to="/others">
            Others
          </NavItem>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">@google.com</li>
        <li>
          <NavItem activeStyle={activeStyle} to="/MyOrders">
            MyOrders
          </NavItem>
        </li>
        <li>
          <NavItem activeStyle={activeStyle} to="/MyAccount">
            MyAccount
          </NavItem>
        </li>
        <li>
          <NavItem activeStyle={activeStyle} to="/SignIn">
            SignIn
          </NavItem>
        </li>
        <li>
          <ShoppingBagIcon className="h-6 w-6 text-blue-500" />
          <span className="absolute text-white text-xs font-medium top-5 right-6 bg-slate-400 rounded-md h-4 w-5 text-center">
            {count}
          </span>
        </li>
      </ul>
    </nav>
  );
}
