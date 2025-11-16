import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CadastrarCliente from "./components/CadastrarCliente";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cadastrar-cliente" element={<CadastrarCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
