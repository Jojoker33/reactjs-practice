import React, { useState, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

const TwoStageRender = () => {
  const [value, setValue] = useState(0);

  /**
   * useEffect will run asynchronously after the render is done and screen painted so it will cause a small flicker, quick change to 0 before update
   */
  //
  // useEffect(() => {
  //   if (value === 0) {
  //     setValue(10 + Math.random() * 200);
  //   }
  // }, [value]);

  // Warning : will block the rendering in order to be excuted,  so prioritize useEffect
  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log("render", value);
  return <div onClick={() => setValue(0)}> value: {value} </div>;
};

ReactDOM.render(<TwoStageRender />, document.querySelector("#root"));
