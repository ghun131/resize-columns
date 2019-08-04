import React from "react";
import "./App.css";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <Row />
      <div className="BtnContainer">
      <button>-</button>
      <button>+</button>
      </div>
    </div>
  );
}

export default App;
