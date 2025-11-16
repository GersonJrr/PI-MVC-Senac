import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#d1d1d1] text-white p-4 flex items-center   justify-between">
      <img src="/logo.png" alt="logo" className="w-[150px] h-[40px]" />

      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/cadastrar-cliente" className="hover:text-gray-300">Cadastrar Cliente</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  );
}
