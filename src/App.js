import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Entrada from "./components/pages/Entrada";
import Fechamentos from "./components/pages/Fechamentos";
import Fechamento from "./components/pages/Fechamento";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Entrada" element={<Entrada />} />
        <Route path="/Fechamentos" element={<Fechamentos />} />
        <Route path="/Fechamento/:id" element={<Fechamento />} />
      </Routes>
    </Router>
  );
}

export default App;
