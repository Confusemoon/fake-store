import { useState } from "react";
import "../css/index.css";

function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      quantity: 1
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      quantity: 1
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      quantity: 1
    },
    {
      id: 5,
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      quantity: 1
    }
  ]);

  const updateQuantity = (id, delta) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <section className="cart-page">
      <h2 className="page-title">Cart</h2>
      <div className="cart-main">
        <div className="cart-items">
          {items.length === 0 && <p className="empty-msg">Your cart is empty.</p>}
          {items.map(item => (
            <div className="list-item" key={item.id}>
              <div className="item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-price">$ {item.price.toFixed(2)}</p>
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <p className="summary-title">Order Summary</p>
          <div className="summary-line">
            <span>Subtotal</span>
            <span>$ {subtotal}</span>
          </div>
          <div className="summary-line">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>$ {subtotal}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;

