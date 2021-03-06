import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  //const renderCount = useRef(0);
  const prevName = useRef("");

  const inputChangeHandler = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });

  // const focusHandler = () => {
  //   inputRef.current.focus();
  // };

  return (
    <div>
      <input
        // ref={inputRef}
        type="text"
        value={name}
        onChange={inputChangeHandler}
      />
      <h1>
        My Name is {name} and it used to be {prevName.current}
      </h1>
      {/* <h3>I have rendered {renderCount.current} times</h3> */}
      {/* <button onClick={focusHandler}>Focus</button> */}
    </div>
  );
};

export default App;
