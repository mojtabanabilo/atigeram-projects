import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hamburger from "./components/Hamburger";


function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Header menu={{showMenu, setShowMenu}}/>
      {
        showMenu && <Hamburger menu={{showMenu, setShowMenu}}/>
      }
    </>
  );
}

export default App;