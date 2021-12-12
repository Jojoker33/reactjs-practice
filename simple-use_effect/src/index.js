import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const UpdateTitle = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);

  // second args which is an array is used to specify which changes affect the effect
  /**
   * We shouldn't change anything oustide the scope component
   * by putting the change in the useEffect hook we can wait to set the changes until react is ready
   */
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
