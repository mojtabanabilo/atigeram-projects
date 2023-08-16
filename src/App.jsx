import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Hamburger from "./components/Hamburger";
import Header from "./components/Header";
import Home from "./components/Home";
import FastFood from "./components/FastFood";
import Drink from "./components/Drink";
import AboutUs from "./components/AboutUs";
import ModalAddItem from './components/ModalAddItem';
import ModalEditItem from "./components/ModalEditItem";
import "./App.css";


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [array, setArray] = useState([]);
  const [object, setObject] = useState({});
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  useEffect(() => {
      const handleResizeWindow = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResizeWindow);
      return () => {
         window.removeEventListener("resize", handleResizeWindow);
      };
  }, []);
  
  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <Header menu={{showMenu, setShowMenu}} size={{width, setWidth}}/>
      {
        showMenu && <Hamburger menu={{showMenu, setShowMenu}} size={{width, setWidth}}/>
      }
      {
        addModal && <ModalAddItem add={{addModal, setAddModal}} data={{array, setArray, object, setObject}}/>
      }
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/fastfood" element={<FastFood data={{array, setArray, object, setObject}} add={{addModal, setAddModal}} edit={{editModal, setEditModal}}/>}/>
        <Route path="/drink" element={<Drink data={{array, setArray, object, setObject}} add={{addModal, setAddModal}} edit={{editModal, setEditModal}}/>}/>
        <Route path="/aboutus" element={<AboutUs size={{width, setWidth}}/>}/>
        <Route path="/modaledititem/:id" element={<ModalEditItem edit={{editModal, setEditModal}} data={{array, setArray, object, setObject}}/>}/>
      </Routes>
    </div>
  );
}

export default App;