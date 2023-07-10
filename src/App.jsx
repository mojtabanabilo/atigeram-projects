import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hamburger from "./components/Hamburger";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";


function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="min-vw-100 min-vh-100">
      <Header menu={{showMenu, setShowMenu}}/>
      {
        showMenu && <Hamburger menu={{showMenu, setShowMenu}}/>
      }
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/" element=""/>
        <Route path="/" element=""/>
      </Routes>
    </div>
  );
}

export default App;