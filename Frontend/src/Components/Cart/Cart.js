import React, { useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = ({ cartItems, setCartItems }) => {
  const handleAdd = (itemId) => {
    const newCartItems = cartItems.map((item) => {
      if (itemId === item.id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }

      return item;
    });

    setCartItems(newCartItems);
  };

  return (
    <div>
      <h2>Your Order</h2>
      <div>
        {
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleAdd={() => handleAdd(item.id)}
              />
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Cart;
