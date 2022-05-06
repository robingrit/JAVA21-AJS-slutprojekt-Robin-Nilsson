import React from "react";

export default function Cart(props) {
  let amountplus = 1;
  let amountminus = -1;
  const { cartItems, onAdd, changeC, logged } = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  function buy() {
    alert("Grattis du köpte allt");
    logged();
    changeC();
  }
  return (
    <div className="block col-1">
      <h2>Cart items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
         
          
          <div>
            {item.qty} x ${item.price}
          </div>
          <div>  <button onClick={() => onAdd(item, amountplus)}>+</button>  <button onClick={() => onAdd(item, amountminus)}>-</button> </div>
        </div>
      ))}
      <div className="row">
        <div >Total Price</div>
        <br ></br >
        
        <div >${itemPrice.toFixed(2)}</div>
      </div>

      <button onClick={buy}>Buy </button>
    </div>

   
  );
}
