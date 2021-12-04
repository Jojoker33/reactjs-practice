import React from "react";
import ReactDOM from "react-dom";

const IconButton = ({ children }) => (
  <button>
    <i className="fa fa-cloud"> {children} </i>
  </button>
);

const App = () => (
  <>
    <IconButton>dynamic rendering</IconButton>
  </>
);

ReactDOM.render(<App />, document.querySelector("#root"));
