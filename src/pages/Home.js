import HeroBanner from '../components/HeroBanner';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSortAlphaDown, FaDollarSign } from 'react-icons/fa';

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
      <div className="sort-icons">
          <button
            className={`icon-btn ${sort === 'title' ? 'active-btn' : ''}`}
            onClick={() => setSort('title')}
            title="Sort by Name"
          >
            <FaSortAlphaDown className="icon-image" />
            <span className="icon-label">Sort by Name</span>
          </button>

          <button
            className={`icon-btn ${sort === 'price' ? 'active-btn' : ''}`}
            onClick={() => setSort('price')}
            title="Sort by Price"
          >
            <FaDollarSign className="icon-image" />
            <span className="icon-label">Sort by Price</span>
          </button>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;