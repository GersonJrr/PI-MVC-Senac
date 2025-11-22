import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#d1d1d1] text-white p-4">
      <div className="max-w-[1366px] mx-auto flex items-center justify-between">
        <img src="/logo.png" alt="logo" className="w-[150px] h-[40px]" />

        <div className="space-x-4 flex text-[#991b1b]">
          <Link to="/" className=" hover:text-gray-900">Home</Link>
          <Link to="/cadastrar-cliente" className="hover:text-gray-900">Cadastrar Cliente</Link>
          <Link to="/todos-os-pedidos" className="hover:text-gray-900">Pedidos</Link>
        </div>
      </div>
    </nav>
  );
}
