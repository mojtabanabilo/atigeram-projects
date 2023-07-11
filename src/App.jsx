import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hamburger from "./components/Hamburger";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FastFood from "./components/FastFood";
import Drink from "./components/Drink";
import AboutUs from "./components/AboutUs";


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResizeWindow = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResizeWindow);
      return () => {
         window.removeEventListener("resize", handleResizeWindow);
      };
  }, []);
  return (
    <div className="min-vw-100 min-vh-100">
      <Header menu={{showMenu, setShowMenu}} size={{width, setWidth}}/>
      {
        showMenu && <Hamburger menu={{showMenu, setShowMenu}} size={{width, setWidth}}/>
      }
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/fastfood" element={<FastFood />}/>
        <Route path="/drink" element={<Drink />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
      </Routes>
    </div>
  );
}

export default App;