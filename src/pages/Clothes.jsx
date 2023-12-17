import Layout from '../components/Layout';
import React from 'react';
import { Context } from '../Utilities/Context';

export default function Clothes() {
  const { productList } = React.useContext(Context);
  const clothes = productList.filter((el) => el.category.name == 'Clothes');
  return <Layout productList={clothes} />;
}
