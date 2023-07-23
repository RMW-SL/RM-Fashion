import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { api } from "../config";
import MenuItems from "./MenuItems";
import "./MainMenu.css";

const MainMenu = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`${api}/item/all`);
      setItems(result.data);
    };

    fetchItems();
  }, []);

  const handleClick = (item) => {
    console.log("Clicked", item);
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
