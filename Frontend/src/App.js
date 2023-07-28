import React from "react";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import GlobalProvider from "./GlobalContext";
import AdminLayout from "./Components/Layouts/AdminLayout";
import Dashboard from "./Components/Dashboard/Dashboard";
import Items from "./Components/Items/Items";
import ItemForm from "./Components/Items/ItemForm";
import Orders from "./Components/Orders/Orders";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route
              path="/admin"
              element={
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/items"
              element={
                <AdminLayout>
                  <Items />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/item-form"
              element={
                <AdminLayout>
                  <ItemForm />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/item-form/:id"
              element={
                <AdminLayout>
                  <ItemForm />
                </AdminLayout>
              }
            />

            <Route
              path="/admin/orders"
              element={
                <AdminLayout>
                  <Orders />
                </AdminLayout>
              }
            />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </ChakraProvider>
  );
};

export default App;
