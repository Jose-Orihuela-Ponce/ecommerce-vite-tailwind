import Layout from '../components/Layout';
import React from 'react';
import { Context } from '../Utilities/Context';

export default function Shoes() {
  const { productList } = React.useContext(Context);
  const shoes = productList.filter((el) => el.category.name == 'Shoes');
  return <Layout productList={shoes} />;
}
