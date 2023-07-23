import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import MainMenu from "../MainMenu";
const HomePage = () => {
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
      <div>
        <div>
          <MainMenu />
        </div>
        <div>
          <h1>Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
