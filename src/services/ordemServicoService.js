import axios from "axios";

const API_URL = 'https://localhost:7001/api/OrdemServico';

export const criarOrdemServico = async (formData) => {
  try {
    const payload = {
      nome: formData.cliente,
      cpf: formData.CPF || '',
      email: formData.email || '',
      telefone: formData.telefone || '',
      modelo: formData.modelo,
      ano: formData.ano,
      cor: formData.cor,
      placa: formData.placa,
      previsaoEntrega: formData.dataEntrega,
      quantidadePecas: parseInt(formData.qtdPecasFunilaria || 0),
      valorTotal: parseFloat(formData.valorTotal || 0),
      prioridade: formData.prioridade,
    };

    const response = await axios.post(API_URL, payload);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar ordem:', error);
    throw error;
  }
};

export const listarOrdensServico = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao listar ordens:', error);
    throw error;
  }
};

export const deletarOrdemServico = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar ordem:', error);
    throw error;
  }
};