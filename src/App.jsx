import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CadastrarCliente from "./pages/CadastrarCliente/CadastrarCliente";
import Pedidos from "./pages/Pedidos/Pedidos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cadastrar-cliente" element={<CadastrarCliente/>} />
          <Route path="/todos-os-pedidos" element={<Pedidos/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
