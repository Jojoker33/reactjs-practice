import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const UpdateTitle = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);

  // second args which is an array is used to specify which changes affect the effect
  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <main>
      <div>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="number">number </label>
        <input
          type="number"
          id="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>
    </main>
  );
};

ReactDOM.render(<UpdateTitle />, document.querySelector("#root"));
