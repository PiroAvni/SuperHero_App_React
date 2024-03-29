
import React, { useState } from "react";
import { Navbar } from "./layout";
import {Home} from "./pages";
import './App.css'

const App = () => {
  const [name, setName] = useState("");

  return (
    <>
      <Navbar setName={setName} />
      <Home name={name} />
    </>
  );
};

export default App;
