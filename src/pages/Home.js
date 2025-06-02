import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('title');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      const sortedProducts = res.data.sort((a, b) =>
        sort === 'price' ? a.price - b.price : a.title.localeCompare(b.title)
      );
      setProducts(sortedProducts);
    });
  }, [sort]);

  return (
    <>
      
    </>
  );
}

export default Home;