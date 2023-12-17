import React from 'react';

export default function useGetData() {
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.escuelajs.co/api/v1/products'
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    setTimeout(fetchData, 1000);
  }, []);

  return product;
}
