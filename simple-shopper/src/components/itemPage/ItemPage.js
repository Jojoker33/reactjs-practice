import React from "react";
import PropTypes from "prop-types";
import Item from "../item/Item";
import "./ItemPage.css";

const ItemPage = ({ items, onAddToCart }) => {
  console.log("array", items);
  return (
    <ul className="ItemPage-items">
      {items.map((item) => {
        return (
          <li className="ItemPage-item" key={item.id}>
            <Item item={item} onAddToCart={() => onAddToCart(item)}>
              <button
                className="Item-addToCart"
                onClick={() => onAddToCart(item)}
              >
                Add to Cart
              </button>
            </Item>
          </li>
        );
      })}
    </ul>
  );
};

ItemPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ItemPage;
