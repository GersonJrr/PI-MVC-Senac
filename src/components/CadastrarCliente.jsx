
import React, { useState } from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function CadastrarCliente(){
 const navigate = useNavigate();
 const [formData, setFormData] = useState({
    cliente: '',
    modelo: '',
    ano: '',
    cor: '',
    placa: '',
    dataEntrega: '',
    qtdPecasFunilaria: '',
    qtdPecasPintura: '',
    valorTotal: '',
    prioridade: 'Média',
    observacoes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Dados do formulário:', formData);
    alert('Cliente cadastrado com sucesso!');
    //adicionar a lógica para enviar os dados
  };

  return (
    <div className="min-h-screen bg-[#151D26] p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#2a3441] rounded-lg shadow-2xl p-6">
        
          <div className="mb-6">
            <button className="flex items-center gap-2 text-#151D26 hover:text-gray-900 transition-colors"
             onClick={() => navigate("/")}
            >
              <div className="w-5 h-5 rounded-full border-2 border-[#151D26] flex items-center justify-center">
                <ArrowLeft className="w-5 h-5" />
              </div>
            </button>
          </div>

          <div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-white text-sm mb-2">Cliente:</label>
                <input
                  type="text"
                  name="cliente"
                  value={formData.cliente}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nome do cliente"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Modelo:</label>
                <input
                  type="text"
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Modelo do veículo"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Ano:</label>
                <input
                  type="text"
                  name="ano"
                  value={formData.ano}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ano"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-white text-sm mb-2">Cor:</label>
                <input
                  type="text"
                  name="cor"
                  value={formData.cor}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Cor do veículo"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Placa:</label>
                <input
                  type="text"
                  name="placa"
                  value={formData.placa}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ABC-1234"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Data de entrega:</label>
                <div className="relative">
                  <input
                    type="date"
                    name="dataEntrega"
                    value={formData.dataEntrega}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-white text-sm mb-2">Qtd peças funilaria:</label>
                <input
                  type="number"
                  name="qtdPecasFunilaria"
                  value={formData.qtdPecasFunilaria}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Qtd peças pintura:</label>
                <input
                  type="number"
                  name="qtdPecasPintura"
                  value={formData.qtdPecasPintura}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Valor total:</label>
                <input
                  type="text"
                  name="valorTotal"
                  value={formData.valorTotal}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-green-300 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="R$ 0,00"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                  <label className="block text-white text-sm mb-2">Qtd peças funilaria:</label>
                  <textarea
                    name="observacoes"
                    value={formData.observacoes}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Observações adicionais..."
                  />
                </div>
              </div>
              
              <div className="flex justify-end items-center">
                <label className="text-white text-sm mr-3">Prioridade:</label>
                <select
                  name="prioridade"
                  value={formData.prioridade}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Baixa">Baixa</option>
                  <option value="Média">Média</option>
                  <option value="Alta">Alta</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}