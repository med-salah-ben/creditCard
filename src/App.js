import React from "react";
import "./App.css";
import creditCard from "./components/card.jpg";
import Card from "./components/creditCard.js";

function App() {
  return (
    <div className="App">
      <img className="pic" src={creditCard} alt="CardImage" />
      <Card />
    </div>
  );
}

export default App;
