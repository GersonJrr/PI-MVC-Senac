import React, { useEffect, useState } from "react";
import DashboardCards from "../components/DashboardCards";
import TabelaPedidos from "../components/TabelaPedidos";
import { listarOrdensServico } from "../services/ordemServicoService";

export default function Home() {
  const [pedidosVencidos, setPedidosVencidos] = useState([]);
  const [pedidosEntregues, setPedidosEntregues] = useState([]);
  const [dashboardData, setDashboardData] = useState({
    totalAtrasadas: 0,
    totalManutencoes: 0,
    faturamento: 0,
  });

  useEffect(() => {
    const fetchOrdens = async () => {
      try {
        const dados = await listarOrdensServico();
        const hoje = new Date();

        const mapData = (item) => ({
          id: item.id,
          cliente: item.nome,
          carro: item.modelo,
          placa: item.placa,
          prioridade: item.prioridade || "-",
          previsaoEntrega: new Date(item.previsaoEntrega).toLocaleDateString("pt-BR")
        });

        const atrasadas = dados
          .filter((item) => new Date(item.previsaoEntrega) < hoje)
          .map(mapData);

        const noPrazo = dados
          .filter((item) => new Date(item.previsaoEntrega) >= hoje)
          .map(mapData);

        setPedidosVencidos(atrasadas);
        setPedidosEntregues(noPrazo);

  
        const totalAtrasadas = dados.filter(item => new Date(item.previsaoEntrega) < hoje).length;
        const totalManutencoes = dados.length;
        const faturamento = dados.reduce((acc, item) => acc + (item.valorTotal || 0), 0);

        setDashboardData({ totalAtrasadas, totalManutencoes, faturamento });

      } catch (error) {
        console.error("Erro ao buscar ordens:", error);
      }
    };

    fetchOrdens();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#151D26]">
      <main className="p-8 flex-1 flex items-center justify-center">
        <div className="flex w-full max-w-6xl justify-between">
          <div className="flex-1 flex flex-col gap-1">
            <TabelaPedidos
              titulo="Manutenções atrasadas"
              icone="x"
              cor="red"
              bordaCor="blue"
              colunas={["ID", "Cliente", "Carro", "Placa", "Prioridade", "Previsão de entrega"]}
              dados={pedidosVencidos}
            />
            <TabelaPedidos
              titulo="Manutenções no prazo"
              icone="check"
              cor="green"
              bordaCor="green"
              colunas={["ID", "Cliente", "Carro", "Placa", "Prioridade", "Previsão de entrega"]}
              dados={pedidosEntregues}
            />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <DashboardCards
              totalAtrasadas={dashboardData.totalAtrasadas}
              totalManutencoes={dashboardData.totalManutencoes}
              faturamento={dashboardData.faturamento}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
