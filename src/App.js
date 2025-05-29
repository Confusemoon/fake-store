import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import notFound from "./pages/notFound";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Product' element={<Product />} />
            <Route exact path='/Cart' element={<Cart />} />
            <Route exact path='/notFound' element={<notFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
