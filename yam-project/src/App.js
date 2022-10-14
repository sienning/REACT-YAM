import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Statistiques from "./components/Statistiques";
import GlobalStyle from "./styles/Global";
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/stats" element={<Statistiques />} />
        <Route path="*" element={<p>No match</p>} />
      </Routes>
    </>
  );
}

export default App;
