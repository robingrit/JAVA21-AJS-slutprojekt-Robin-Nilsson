import ReactDOM from "react-dom/client";
import { useState } from "react";

import FormMulti from "./modules/FormMulti";
import Info from "./modules/Info";
import ShopinPage from "./modules/ShopinPage";

import Products from "./components/Products/Products";
import Navbar from "./components/NavBar/NavBar";
import Cart from "./components/Cart";
function App() {
  const [userInfo, setUserInfo] = useState({});

  const [quantity, setquantity] = useState({});

  function changeUserInfo(newInfo) {
    setUserInfo(newInfo);
  }

  const [loggedIn, setLoggedIn] = useState(false);
  const [CartPress, setCartPress] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product, amount) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + amount } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: amount }]);
    }
  };

  function logged() {
    setLoggedIn(!loggedIn);
  }

  function changeC() {
    setCartPress(!CartPress);
  }

  return (
    <div>
      <Navbar cartItems={cartItems} changeC={changeC} />
      <Info userInfo={userInfo} />

      <ShopinPage
        onAdd={onAdd}
        loggedIn={loggedIn}
        logged={logged}
        CartPress={CartPress}
        cartItems={cartItems}
        changeC={changeC}
        changeUserInfo={changeUserInfo}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
