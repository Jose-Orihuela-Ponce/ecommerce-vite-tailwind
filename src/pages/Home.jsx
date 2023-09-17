import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import ProductDetail from "../components/ProductDetail";
import { Context } from "../Utilities/Context";
import useGetData from "../Utilities/useGetData";
import CheckoutSideMenu from "../components/CheckoutSideMenu";

export default function Home() {
  const { isProductDatailOpen, isCheckoutProductOpen } =
    React.useContext(Context);
  const product = useGetData();
  const [copyProducts, setCopyProduct] = React.useState([]);
  const [value, setValue] = React.useState("");
  // const [searchProduct, setSearchProduct] = React.useState([]);
  React.useEffect(() => {
    setCopyProduct([...product]);
  }, [product]);

  function filterProducts(value) {
    const newValue = value.toLowerCase();
    console.log("");
    let filteredProducts = product.filter((item) =>
      item.title.toLowerCase().includes(newValue)
    );

    if (value === "") filteredProducts = product;
    setCopyProduct(filteredProducts);
  }

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 mb-4">
        <h1 className="font-medium text-xl">Products ps</h1>
      </div>
      <input
        type="text"
        value={value}
        placeholder="search products"
        className="rounded-lg border border-black w-80 p-4 focus:outline-none"
        onChange={(e) => {
          setValue(e.target.value);
          filterProducts(e.target.value);
        }}
      />
      {isProductDatailOpen && <ProductDetail />}
      {isCheckoutProductOpen && <CheckoutSideMenu />}
      <div className="grid grid-cols-3 gap-1 mt-5 w-full max-w-screen-md">
        {copyProducts.length > 0 ? (
          copyProducts.map((item) => <Card key={item.id} data={item} />)
        ) : (
          <Loader />
        )}
      </div>
    </Layout>
  );
}
