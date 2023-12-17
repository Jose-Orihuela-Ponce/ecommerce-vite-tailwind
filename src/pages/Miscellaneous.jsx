import Layout from '../components/Layout';
import useGetData from '../Utilities/useGetData';

export default function Miscellaneous() {
  const productList = useGetData();
  const miscellaneous = productList.filter(
    (el) => el.category.name == 'Miscellaneous'
  );
  return <Layout productList={miscellaneous} />;
}
