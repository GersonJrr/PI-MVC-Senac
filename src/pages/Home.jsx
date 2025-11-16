
import TabelaPedidos from "../components/TabelaPedidos";
import DashboardCards from "../components/DashboardCards";
import Navbar from "../components/NavBar";

const pedidosVencidos = [
  { id: 1, cliente: 'João', carro: 'Civic', placa: 'ABC1234', prioridade: 'Alta', previsaoEntrega: '10/11/2025' },
  { id: 2, cliente: 'Maria', carro: 'Corolla', placa: 'XYZ5678', prioridade: 'Média', previsaoEntrega: '12/11/2025' },
  { id: 6, cliente: 'Maria', carro: 'Corolla', placa: 'XYZ5678', prioridade: 'Média', previsaoEntrega: '12/11/2025' },
  { id: 6, cliente: 'Maria', carro: 'Corolla', placa: 'XYZ5678', prioridade: 'Média', previsaoEntrega: '12/11/2025' },
  { id: 6, cliente: 'Maria', carro: 'Corolla', placa: 'XYZ5678', prioridade: 'Média', previsaoEntrega: '12/11/2025' },
];

const pedidosEntregues = [
  { id: 3, cliente: 'Carlos', carro: 'Golf', placa: 'DEF4321',previsaoEntrega: '12/11/2025' },
  { id: 4, cliente: 'Carlos', carro: 'Golf', placa: 'DEF4321',previsaoEntrega: '12/11/2025'},
  { id: 5, cliente: 'Carlos', carro: 'Golf', placa: 'DEF4321',previsaoEntrega: '12/11/2025' },
  { id: 5, cliente: 'Carlos', carro: 'Golf', placa: 'DEF4321',previsaoEntrega: '12/11/2025' },
  { id: 5, cliente: 'Carlos', carro: 'Golf', placa: 'DEF4321',previsaoEntrega: '12/11/2025' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-8 h-screen flex items-center justify-center bg-[#151D26]">
        <div className="flex w-full max-w-6xl justify-between">
          <div className="flex-1 flex flex-col gap-1">
            <TabelaPedidos
              titulo="Manutenções atrasadas"
              icone="x"
              cor="red"
              bordaCor="blue"
              colunas={['ID', 'Cliente', 'Carro', 'Placa', 'Prioridade', 'Previsão de entrega']}
              dados={pedidosVencidos}
            />
            <TabelaPedidos
              titulo="Manuteções no prazo"
              icone="check"
              cor="green"
              bordaCor="green"
              colunas={['ID', 'Cliente', 'Carro', 'Placa', 'Previsão de entrega']}
              dados={pedidosEntregues}
            />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <DashboardCards/>
          </div>
        </div>
      </main>
    </>
  );
}
