import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");

  const inputChangeHandler = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input type="text" value={name} onChange={inputChangeHandler} />
      <h1>My Name is {name}</h1>
    </div>
  );
};

export default App;
