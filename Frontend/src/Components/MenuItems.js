import React from "react";
import { api } from "../config";

const MenuItems = ({ item, onClick }) => {
  return (
    <div className="menu-item-container" onClick={onClick}>
      <img src={`${api}${item.image}`} alt="" />
      <h3 className="menu-item-title">{item.name}</h3>
      <h5 className="menu-item-price">{item.price}</h5>
    </div>
  );
};

export default MenuItems;
