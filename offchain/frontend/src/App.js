import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import Buy from "./pages/Buy"
import './App.css';

export const Context = React.createContext({});

const App = () => {
  return (
    <div className="app">
      <Context.Provider>
        <nav className="navigator">
          <Link className="nav-element" to="/"> Gallery  </Link>
          {/* <Link className="nav-element" to="/transactions"> Transactions </Link> */}
          {/* <Link className="nav-element" to="/chart"> Chart </Link> */}
          {/*<Link className="nav-element" to="/about"> About </Link>*/}
          {/* <Link className="nav-element element-right" to="/login"> Login </Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<Buy />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
