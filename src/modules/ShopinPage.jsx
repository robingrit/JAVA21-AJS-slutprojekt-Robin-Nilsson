import React from "react";
import Products from "../components/Products/Products";

import Cart from "../components/Cart";

import FormMulti from "../modules/FormMulti";
export default function HomePage({
  loggedIn,
  onAdd,
  CartPress,
  logged,
  cartItems,
  changeC,
  changeUserInfo,
}) {
  function loggedOut() {
    if (loggedIn && CartPress) {
      logged();
      changeC();
      changeUserInfo({});
    } else {
      logged();
      changeUserInfo({});
    }
  }

  function check() {
    if (CartPress) {
      return (
        <div>
          <Cart
            onAdd={onAdd}
            cartItems={cartItems}
            changeC={changeC}
            logged={logged}
          />
          <button onClick={loggedOut}>Log out</button>
        </div>
      );
    } else if (loggedIn) {
      return (
        <div>
          <Products onAdd={onAdd} />
          <button onClick={loggedOut}>Log out</button>;
        </div>
      );
    } else {
      return <FormMulti changeUserInfo={changeUserInfo} logged={logged} />;
    }
  }

  return check();
}
