import React, { useState } from "react";
import { Navbar } from "./Navbar";
import Home from "./Home";

const App = () => {
  const [name, setName] = useState("superman");

  return (
    <>
      <Navbar setName={setName} />
      <Home name={name} />
    </>
  );
};

export default App;
