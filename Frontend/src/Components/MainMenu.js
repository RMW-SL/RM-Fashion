import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { api } from "../config";
import MenuItems from "./MenuItems";
import "./MainMenu.css";
import toast from "react-hot-toast";
const MainMenu = ({ cartItems, setCartItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`${api}/item/all`);
      setItems(result.data);
    };

    fetchItems();
  }, []);

  const handleClick = (clickedItem) => {
    const itemFound = cartItems.find((item) => {
      if (item.id === clickedItem.id) {
        return true;
      } else {
        return false;
      }
    });

    if (itemFound) {
      toast.error("Item already added");
      return;
    }

    const newCartItems = [...cartItems];
    const newItem = {
      ...clickedItem,
      qty: 1,
    };
    newCartItems.push(newItem);
    setCartItems(newCartItems);
  };
  return (
    <div className="main-menu-container">
      {items.map((item) => {
        return (
          <MenuItems
            key={item.id}
            item={item}
            onClick={() => {
              handleClick(item);
            }}
          />
        );
      })}
    </div>
  );
};

export default MainMenu;
