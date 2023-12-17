import Layout from '../components/Layout';
import useGetData from '../Utilities/useGetData';

export default function Electronics() {
  const productList = useGetData();
  const electronics = productList.filter(
    (el) => el.category.name == 'Electronics'
  );
  return <Layout productList={electronics} />;
}
