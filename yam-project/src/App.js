import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Statistiques from "./components/Statistiques";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">Statistiques</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/stats" element={<Statistiques />} />
        <Route path="*" element={<p>No match</p>} />
      </Routes>
    </>
  );
}

export default App;
