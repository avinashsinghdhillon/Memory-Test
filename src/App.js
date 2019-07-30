import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard"
import Clicky from "./components/Clicky";
import Footer from "./components/Footer";

clickyList=[
  {
    id: 1,
    name: 
  }
]

function App() {
  return (
    <div className="container">
      <Navbar />
      {/* <Header />
      <Gameboard>
        This is a child
        <Clicky />
      </Gameboard>
      <Footer /> */}
    </div>
  );
}

export default App;
