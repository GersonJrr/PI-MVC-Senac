import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { listarOrdensServico } from '../../services/ordemServicoService';
import { Trash } from 'lucide-react';
import { deletarOrdemServico } from '../../services/ordemServicoService';

export default function Pedidos() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    carregarOrdens();
  }, []);

  const carregarOrdens = async () => {
    try {
      setLoading(true);
      setError(null);
      const ordens = await listarOrdensServico();
      setData(ordens);
    } catch (err) {
      setError('Erro ao carregar ordens de serviço');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatarData = (dataString) => {
    if (!dataString) return '-';
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja deletar esta ordem de serviço?')) return;

    try {
        await deletarOrdemServico(id);
        setData(data.filter(item => item.id !== id)); 
    } catch (err) {
        alert('Erro ao deletar a ordem de serviço.');
        console.error(err);
    }
    };

  const formatarValor = (valor) => {
    if (!valor) return 'R$ 0,00';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Em andamento': return 'bg-blue-500';
      case 'Aguardando': return 'bg-yellow-500';
      case 'Concluído': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPrioridadeColor = (prioridade) => {
    switch(prioridade) {
      case 'Alta': return 'text-red-400';
      case 'Média': return 'text-yellow-400';
      case 'Baixa': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-6 flex items-center justify-center">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-6">
        <div className="mb-6">
            <button className="flex items-center gap-2 text-#151D26 hover:text-gray-900 transition-colors"
            onClick={() => navigate("/")}
            >
                <div className="w-5 h-5 rounded-full border-2 border-[#151D26] flex items-center justify-center">
                <ArrowLeft className="w-5 h-5" />
                </div>
            </button>
            </div>
        <div className="bg-red-900/50 text-red-200 p-4 rounded-lg text-center">
          <p className="mb-4">{error}</p>
          <button 
            onClick={carregarOrdens}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-6">
       <div className="mb-6">
            <button className="flex items-center gap-2 text-#151D26 hover:text-gray-900 transition-colors"
            onClick={() => navigate("/")}
            >
            <div className="w-5 h-5 rounded-full border-2 border-[#151D26] flex items-center justify-center">
                <ArrowLeft className="w-5 h-5" />
            </div>
            </button>
        </div>
        
      <div className="bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                <th className="px-4 py-4 text-left text-sm font-semibold">ID</th>
                <th className="px-4 py-4 text-left text-sm font-semibold">Cliente</th>
                <th className="px-4 py-4 text-left text-sm font-semibold">Modelo</th>
                <th className="px-4 py-4 text-left text-sm font-semibold">Prioridade</th>
                <th className="px-4 py-4 text-left text-sm font-semibold">Placa</th>
                <th className="px-4 py-4 text-left text-sm font-semibold">Qtd. Itens</th>
                <th className="px-4 py-4 text-left text-sm font-semibold">Dt. Criação</th>
                <th className="px-4 py-4 text-left text-sm font-semibold">Prev. Entrega</th>
                <th className="px-4 py-4 text-left text-sm font-semibold">Vl. Total</th>
                <th className="px-4 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-4 py-4 text-left text-sm font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="10" className="px-4 py-8 text-center text-gray-400">
                    Nenhuma ordem de serviço encontrada
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr 
                    key={item.id} 
                    className={`border-b border-slate-700 hover:bg-slate-700 transition cursor-pointer ${
                      index % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-800/30'
                    }`}
                  >
                    <td className="px-4 py-4 text-gray-300 text-sm">{item.id}</td>
                    <td className="px-4 py-4 text-gray-200 text-sm font-medium">{item.nome}</td>
                    <td className="px-4 py-4 text-gray-300 text-sm">{item.modelo}</td>
                    <td className="px-4 py-4 text-sm">
                      <span className={`font-semibold ${getPrioridadeColor(item.prioridade)}`}>
                        {item.prioridade}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-300 text-sm font-mono">{item.placa}</td>
                    <td className="px-4 py-4 text-gray-300 text-sm text-center">{item.quantidadePecas || 0}</td>
                    <td className="px-4 py-4 text-gray-300 text-sm">{formatarData(item.dataCriacao)}</td>
                    <td className="px-4 py-4 text-gray-300 text-sm">{formatarData(item.previsaoEntrega)}</td>
                    <td className="px-4 py-4 text-green-400 text-sm font-semibold">{formatarValor(item.valorTotal)}</td>
                    <td className="px-4 py-4 text-sm">
                      <span className={`${getStatusColor(item.status)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                        {item.status || 'Aguardando'}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-center">
                        <button 
                            onClick={() => handleDelete(item.id)}
                            className="text-red-500 hover:text-red-700 transition"
                        >
                            <Trash className="w-5 h-5 mx-auto" />
                        </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-gray-400 text-sm">
          Total de registros: {data.length}
        </div>
        <button 
          onClick={carregarOrdens}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition text-sm"
        >
          Atualizar
        </button>
      </div>
    </div>
  );
}