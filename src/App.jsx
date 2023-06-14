import { useState, createContext } from "react";
import {Routes, Route} from "react-router-dom";
// components
import Main from "./components/Main";
import ModalAddItem from "./components/ModalAddItem";
// style
import "./App.css";

// context
export const dataProvider = createContext();



function App() {
  const [item, setItem] = useState([]);
  const [newItem, setNewItem] = useState({});

  return (
    <dataProvider.Provider value={{item, setItem, newItem, setNewItem}}>
      <div className="App">
        <Main/>
        <Routes>
          <Route path="/*" element={<Main />}/>
          <Route path="/modaladditem" element={<ModalAddItem />}/>
        </Routes>
      </div>
    </dataProvider.Provider>
  );
}

export default App;