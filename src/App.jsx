import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CadastrarCliente from "./components/CadastrarCliente";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<CadastrarCliente/>} />
      </Routes>
    </Router>
  );
}

export default App;
