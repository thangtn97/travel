import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
    </div>
  );
}

export default App;
