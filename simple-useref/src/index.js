import React, { useRef } from "react";
import ReactDOM from "react-dom";

const LoginForm = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "current values",
      usernameRef.current.value,
      passwordRef.current.value
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username"> Username </label>
      <input type="text" id="username" ref={usernameRef} />
      <br />

      <label htmlFor="password"> Password </label>
      <input type="password" id="password" ref={passwordRef} />
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};

ReactDOM.render(<LoginForm />, document.querySelector("#root"));
