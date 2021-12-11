import React from "react";
import PropTypes from "prop-types";
import Item from "../item/Item";
import "./CartPage.css";

const CartPage = ({ items, onAddOne, onRemoveOne }) => (
  <ul className="CartPage-items">
    {items.map((item) => (
      <li className="CartPage-item" key={item.id}>
        <Item item={item}>
          <div className="CartItems-Controls">
            <button
              className="CartItem-removeOne"
              onClick={() => onRemoveOne(item)}
            >
              &ndash;
            </button>
            <span className="CartItem-count">{item.count}</span>
            <button className="CartItem-addOne" onClick={() => onAddOne(item)}>
              +
            </button>
          </div>
        </Item>
      </li>
    ))}
  </ul>
);

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
};

export default CartPage;
