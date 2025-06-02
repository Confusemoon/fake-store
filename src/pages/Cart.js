import "../css/index.css";

function Cart() {
  const items = [
    { id: 1, title: "Intro to React" },
    { id: 2, title: "Creating a web app" },
    { id: 3, title: "Components" },
    { id: 4, title: "Hooks in React" },
    { id: 5, title: "Routes" }
  ];

  return (
    <section className="cart-page">
      <h2 className="page-title">Cart</h2>
      <ul className="list">
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </section>
  );
}

export default Cart;
