import React from 'react';
import Card from '../components/Card';
import Loader from '../components/Loader';
import ProductDetail from '../components/ProductDetail';
import { Context } from '../Utilities/Context';
import CheckoutSideMenu from '../components/CheckoutSideMenu';

export default function Layout({ productList }) {
  console.log(productList);

  const { isProductDatailOpen, isCheckoutProductOpen } =
    React.useContext(Context);
  const [products, setProducts] = React.useState(productList);
  const [value, setValue] = React.useState('');

  function filterProducts(value) {
    let filteredProducts = productList.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filteredProducts);

    if (value === '') {
      setProducts(productList);
    }
  }
  React.useEffect(() => {
    setProducts(productList);
  }, [productList]);
  return (
    <div className="flex flex-col items-center mt-20">
      {' '}
      <div className="flex items-center justify-center w-80 mb-4">
        <h1 className="font-medium text-xl">Products ps</h1>
      </div>
      <input
        type="text"
        value={value}
        placeholder="search products"
        className="rounded-lg border border-black w-80 p-2 focus:outline-none"
        onChange={(e) => {
          setValue(e.target.value);
          filterProducts(e.target.value);
        }}
      />
      {isProductDatailOpen && <ProductDetail />}
      {isCheckoutProductOpen && <CheckoutSideMenu />}
      <div className="grid grid-cols-3 gap-1 mt-5 w-full max-w-screen-md">
        {products?.length > 0 ? (
          products.map((item) => <Card key={item.id} data={item} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
