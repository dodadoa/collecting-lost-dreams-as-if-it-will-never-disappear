import { Routes, Route, Link } from "react-router-dom";
import Buy from "./pages/Buy"
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navigator">
        <Link className="nav-element" to="/"> Buy </Link>
        <Link className="nav-element" to="/transactions"> Transactions </Link>
        <Link className="nav-element" to="/chart"> Chart </Link>
        <Link className="nav-element" to="/about"> About </Link>
        <Link className="nav-element element-right" to="/login"> Login </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Buy />} />
      </Routes>
    </div>
  );
}

export default App;
