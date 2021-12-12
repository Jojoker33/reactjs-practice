import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// No need to render every time the function && no properties dependencies
const reducer = (state, action) => {
  switch (action) {
    case "on":
      return true;
    case "off":
      return false;
    default:
      return state;
  }
};

const Room = () => {
  const [light, dispatch] = useReducer(reducer, true);
  return (
    <div className={`${light ? "lit" : "unlit"}`}>
      <h1>Room</h1>
      <button onClick={() => dispatch("on")}>ON</button>
      <button onClick={() => dispatch("off")}>Off</button>
    </div>
  );
};

ReactDOM.render(<Room />, document.querySelector("#root"));
