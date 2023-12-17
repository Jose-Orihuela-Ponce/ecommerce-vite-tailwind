import React from 'react';
import PropTypes from 'prop-types';
import useGetData from './useGetData';
export const Context = React.createContext();

export default function ShoppContext({ children }) {
  const [count, setCount] = React.useState(0);
  const [isProductDatailOpen, setIsProductDatailOpen] = React.useState(false);
  const [detailProdcutCard, setDetailProductCard] = React.useState({});
  const [cardProducts, setCardProducts] = React.useState([]);
  const [isCheckoutProductOpen, setIsCheckoutProductOpen] =
    React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [checkout, setCheckout] = React.useState([]);
  const productList = useGetData();

  const totalPrices = (cardProducts) => {
    const suma = cardProducts.reduce((acc, el) => {
      return acc + el.price;
    }, 0);
    setTotalPrice(suma);
  };
  //usamos el useEffect para actulizar la suma de de los prosuctos
  React.useEffect(() => {
    totalPrices(cardProducts);
    setCount(cardProducts.length);
  }, [cardProducts]);
  return (
    <Context.Provider
      value={{
        count,
        setCount,
        isProductDatailOpen,
        setIsProductDatailOpen,
        detailProdcutCard,
        setDetailProductCard,
        cardProducts,
        setCardProducts,
        isCheckoutProductOpen,
        setIsCheckoutProductOpen,
        totalPrice,
        setTotalPrice,
        totalPrices,
        checkout,
        setCheckout,
        productList
      }}
    >
      {children}
    </Context.Provider>
  );
}

ShoppContext.propTypes = {
  children: PropTypes.node.isRequired
};
