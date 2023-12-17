import Layout from '../components/Layout';
import useGetData from '../Utilities/useGetData';

export default function Shoes() {
  const productList = useGetData();
  const shoes = productList.filter((el) => el.category.name == 'Shoes');
  return <Layout productList={shoes} />;
}
