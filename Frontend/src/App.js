import React from "react";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import GlobalProvider from "./GlobalContext";
const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
