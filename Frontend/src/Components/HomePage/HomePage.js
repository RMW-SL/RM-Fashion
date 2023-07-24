import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import MainMenu from "../MainMenu";
import Cart from "../Cart/Cart";
const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="home-container">
      <div className="home-nav">
        <h1>Logo</h1>
        <div>
          <Link to="/login">
            <Button colorScheme="blue" variant="outline">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button colorScheme="yellow" variant="outline">
              Register
            </Button>
          </Link>
        </div>
      </div>
      <div className="home-inner-container">
        <MainMenu cartItems={cartItems} setCartItems={setCartItems} />
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </div>
  );
};

export default HomePage;
