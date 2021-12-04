import React from "react";

export const Child = ({ onAction, reset }) => (
  <span>
    <button onClick={onAction}>Click Me!</button>
    <button onClick={reset}> Reset </button>
  </span>
);
