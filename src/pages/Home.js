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
      <HeroBanner />
      <section>
        <div>
          <button onClick={() => setSort('title')}>Sort by Name</button>
          <button onClick={() => setSort('price')}>Sort by Price</button>
        </div>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;