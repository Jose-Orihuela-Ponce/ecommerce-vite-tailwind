import Layout from '../components/Layout';
import useGetData from '../Utilities/useGetData';

export default function Clothes() {
  const productList = useGetData();
  const clothes = productList.filter((el) => el.category.name == 'Clothes');
  return <Layout productList={clothes} />;
}
