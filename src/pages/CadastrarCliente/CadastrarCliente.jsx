import React from 'react';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { criarOrdemServico } from '../../services/ordemServicoService';

export default function CadastrarCliente() {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      cliente: '',
      CPF: '',
      email: '',
      telefone: '',
      modelo: '',
      ano: '',
      cor: '',
      placa: '',
      dataEntrega: '',
      qtdPecasFunilaria: '',
      valorTotal: '',
      prioridade: 'Média',
      observacoes: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      const result = await criarOrdemServico(data);
      console.log('Ordem criada com sucesso:', result);
      alert('Cliente cadastrado com sucesso!');
      reset();
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar cliente. Veja o console.');
    }
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
                <label className="block text-white text-sm mb-2">Cliente: *</label>
                <input
                  type="text"
                  {...register('cliente', { 
                    required: 'Nome do cliente é obrigatório',
                    minLength: { value: 3, message: 'Nome deve ter no mínimo 3 caracteres' }
                  })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nome do cliente"
                />
                {errors.cliente && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.cliente.message}</span>
                )}
              </div>

              <div>
                <label className="block text-white text-sm mb-2">CPF:</label>
                <input
                  type="text"
                  {...register('CPF', {
                    pattern: {
                      value: /^\d{11}$/,
                      message: 'CPF deve ter 11 dígitos'
                    }
                  })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="00000000000"
                  maxLength="11"
                />
                {errors.CPF && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.CPF.message}</span>
                )}
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Email:</label>
                <input
                  type="email"
                  {...register('email', {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="email@exemplo.com"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>
                )}
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Telefone:</label>
                <input
                  type="tel"
                  {...register('telefone', {
                    pattern: {
                      value: /^\d{10,11}$/,
                      message: 'Telefone deve ter 10 ou 11 dígitos'
                    }
                  })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="11999999999"
                />
                {errors.telefone && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.telefone.message}</span>
                )}
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Modelo: *</label>
                <input
                  type="text"
                  {...register('modelo', { 
                    required: 'Modelo é obrigatório' 
                  })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Modelo do veículo"
                />
                {errors.modelo && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.modelo.message}</span>
                )}
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Ano: *</label>
                <input
                  type="number"
                  {...register('ano', { 
                    required: 'Ano é obrigatório',
                    min: { value: 1900, message: 'Ano inválido' },
                    max: { value: new Date().getFullYear() + 1, message: 'Ano inválido' }
                  })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="2024"
                />
                {errors.ano && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.ano.message}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-white text-sm mb-2">Cor: *</label>
                <input
                  type="text"
                  {...register('cor', { 
                    required: 'Cor é obrigatória' 
                  })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Cor do veículo"
                />
                {errors.cor && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.cor.message}</span>
                )}
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Placa: *</label>
                <input
                  type="text"
                  {...register('placa', { 
                    required: 'Placa é obrigatória',
                  })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ABC-1234"
                  maxLength="8"
                />
                {errors.placa && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.placa.message}</span>
                )}
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Data de entrega: *</label>
                <div className="relative">
                  <input
                    type="date"
                    {...register('dataEntrega', { 
                      required: 'Data de entrega é obrigatória' 
                    })}
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
                </div>
                {errors.dataEntrega && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.dataEntrega.message}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-white text-sm mb-2">Qtd peças:</label>
                <input
                  type="number"
                  {...register('qtdPecasFunilaria', {
                    min: { value: 0, message: 'Valor não pode ser negativo' }
                  })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
                {errors.qtdPecasFunilaria && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.qtdPecasFunilaria.message}</span>
                )}
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Valor total:</label>
                <input
                  type="number"
                  step="0.01"
                  {...register('valorTotal', {
                    min: { value: 0, message: 'Valor não pode ser negativo' }
                  })}
                  className="w-full px-4 py-2 rounded-lg bg-green-300 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0.00"
                />
                {errors.valorTotal && (
                  <span className="text-red-400 text-xs mt-1 block">{errors.valorTotal.message}</span>
                )}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-end items-center">
                <label className="text-white text-sm mr-3">Prioridade:</label>
                <select
                  {...register('prioridade')}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Baixa">Baixa</option>
                  <option value="Média">Média</option>
                  <option value="Alta">Alta</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Salvando...' : 'Salvar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}