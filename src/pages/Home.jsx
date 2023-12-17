import Layout from '../components/Layout';
import useGetData from '../Utilities/useGetData';

export default function Home() {
  const productList = useGetData();
  console.log('home');

  return <Layout productList={productList} />;
}
