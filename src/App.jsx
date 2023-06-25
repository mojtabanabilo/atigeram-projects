import { useState, createContext, useEffect } from "react";
import {Routes, Route} from "react-router-dom";

// components
import Main from "./components/Main";
import ModalAddItem from "./components/ModalAddItem";
import ModalEditItem from "./components/ModalEditItem";

// requests
import { post } from "../src/server/request";

// style
import "./App.css";

// context
export const dataProvider = createContext();

function App() {
  const [item, setItem] = useState([]);
  const [newItem, setNewItem] = useState({id: 0});
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);

  // useEffect(() => {
  //   post('https://jsonplaceholder.typicode.com/posts', item)
  // }, [item])

  return (
    <>
      <dataProvider.Provider value={{item, setItem, newItem, setNewItem, showModal, setShowModal, edit, setEdit}}>
        <div className="App">
          {
            showModal && <ModalAddItem />
          }
          {
            edit && <ModalEditItem />
          }
          <Routes>
            <Route path="/*" element={<Main />}/>
            <Route path="/modaladditem" element={<ModalAddItem />}/>
          </Routes>
        </div>
      </dataProvider.Provider>
    </>
  );
}

export default App;