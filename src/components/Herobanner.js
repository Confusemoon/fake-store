import { useEffect, useState } from 'react';
import axios from 'axios';

function HeroBanner() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=5').then(res => {
      setProducts(res.data);
    });
  }, []);

  return (
    <section className="hero-banner flex">
      <div className="hero-text">
        <h2>Best Products, Best Prices</h2>
        <p>Discover the perfect product for you!</p>
        <div className="app-buttons">
          <button>Download for iOS</button>
          <button>Download for Android</button>
        </div>
      </div>
      <div className="hero-carousel">
        {products.map(product => (
          <img key={product.id} src={product.image} alt={product.title} />
        ))}
      </div>
    </section>
  );
}

export default HeroBanner;