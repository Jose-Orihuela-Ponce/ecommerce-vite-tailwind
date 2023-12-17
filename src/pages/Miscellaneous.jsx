import Layout from '../components/Layout';
import React from 'react';
import { Context } from '../Utilities/Context';

export default function Miscellaneous() {
  const { productList } = React.useContext(Context);
  const miscellaneous = productList.filter(
    (el) => el.category.name == 'Miscellaneous'
  );
  return <Layout productList={miscellaneous} />;
}
