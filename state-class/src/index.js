import React from "react";
import ReactDOM from "react-dom";
import { Page } from "./components/Page";

// Simple version
//const Parent = () => <Child onAction={handleAction} />;

ReactDOM.render(<Page />, document.querySelector("#root"));
