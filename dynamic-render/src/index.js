import React from "react";
import ReactDOM from "react-dom";

const IconButton = ({}) => (
  <button>
    <i className="fa fa-cloud"> Hello</i>
  </button>
);

const App = () => (
  <>
    <IconButton />
  </>
);

ReactDOM.render(<App />, document.querySelector("#root"));
