import React, { useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { Button } from "@chakra-ui/react";
const Cart = ({ cartItems, setCartItems }) => {
  let total = 0;

  cartItems.forEach((item) => {
    total += item.price * item.qty;
  });

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

  const handleReduce = (itemId) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        if (item.qty === 1) {
          return item;
        } else {
          return {
            ...item,
            qty: item.qty - 1,
          };
        }
      }
      return item;
    });
    setCartItems(newCartItems);
  };
  const handleRemove = (itemId) => {
    const newCartItem = cartItems.filter((item) => {
      if (item.id === itemId) {
        return false;
      } else {
        return true;
      }
    });

    setCartItems(newCartItem);
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
                handleReduce={() => handleReduce(item.id)}
                handleRemove={() => handleRemove(item.id)}
              />
            ))}
          </div>
        }
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="total">Total: {total}</div>

          <Button colorScheme="blue" className="place-order-button">
            Place Order
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;
