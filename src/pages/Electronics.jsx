import Layout from '../components/Layout';
import React from 'react';
import { Context } from '../Utilities/Context';

export default function Electronics() {
  const { productList } = React.useContext(Context);
  const electronics = productList.filter(
    (el) => el.category.name == 'Electronics'
  );
  return <Layout productList={electronics} />;
}
