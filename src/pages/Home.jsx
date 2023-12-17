import React from 'react';
import { Context } from '../Utilities/Context';
import Layout from '../components/Layout';

export default function Home() {
  const { productList } = React.useContext(Context);

  return <Layout productList={productList} />;
}
