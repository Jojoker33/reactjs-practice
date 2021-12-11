import React, { useState } from "react";
import "./App.css";
import CartPage from "./components/cartPage/CartPage";
import ItemPage from "./components/itemPage/ItemPage";
import Nav from "./components/Nav";
import { items } from "./mock-data";

const summarizeCart = (cart) => {
  const groupedItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || { ...item, count: 0 };
    summary[item.id].count++;
    return summary;
  }, {});

  return Object.values(groupedItems);
};

function App() {
  const [activeTab, setActiveTab] = useState("items");
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (item) => {
    let index = cart.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      setCart((cart) => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      });
    }
  };
  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <div> there is currently : {cart.length} items</div>
      <main className="App-content">
        <Content
          tab={activeTab}
          onAddToCart={addToCart}
          cart={summarizeCart(cart)}
          onRemoveItem={removeItem}
        />
      </main>
    </div>
  );
}

const Content = ({ tab, onAddToCart, onRemoveItem, cart }) => {
  switch (tab) {
    default:
    case "items":
      return <ItemPage items={items} onAddToCart={onAddToCart} />;
    case "cart":
      return (
        <CartPage
          items={cart}
          onAddOne={onAddToCart}
          onRemoveOne={onRemoveItem}
        />
      );
  }
};

export default App;
