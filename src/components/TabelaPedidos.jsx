import React from 'react';
import { X, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

function TabelaPedidos({ 
  titulo = "Pedidos", 
  icone = "x",
  cor = "red",
  colunas = [],
  dados = [],
  bordaCor = "blue"
}) {
  const icones = {
    x: X,
    check: CheckCircle,
    clock: Clock,
    alert: AlertTriangle
  };
  
  const Icon = icones[icone] || X;
  
  const cores = {
    red: {
      from: 'from-red-900',
      to: 'to-red-950',
      header: 'bg-red-800',
      border: 'border-red-700',
      tableHeader: 'bg-red-900',
      tableBorder: 'border-red-800',
      text: 'text-red-100',
      textAlt: 'text-red-300',
      hover: 'hover:bg-red-900/50',
      divide: 'divide-red-800'
    },
    green: {
      from: 'from-green-900',
      to: 'to-green-950',
      header: 'bg-green-800',
      border: 'border-green-700',
      tableHeader: 'bg-green-900',
      tableBorder: 'border-green-800',
      text: 'text-green-100',
      textAlt: 'text-green-300',
      hover: 'hover:bg-green-900/50',
      divide: 'divide-green-800'
    },
  };

  const bordaCores = {
    blue: 'border-blue-500',
    green: 'border-green-500',
    red: 'border-red-500',
    yellow: 'border-yellow-500',
    purple: 'border-purple-500'
  };
  
  const colorScheme = cores[cor] || cores.red;
  const borderColor = bordaCores[bordaCor] || bordaCores.blue;

  return (
    <div className="w-full mx-auto p-4">
      <div className={`bg-gradient-to-b ${colorScheme.from} ${colorScheme.to} rounded-lg shadow-2xl border-2 ${borderColor} overflow-hidden`}>
        <div className={`${colorScheme.header} px-4 py-2 flex items-center justify-between border-b ${colorScheme.border}`}>
          <div className="flex items-center gap-2">
            <Icon className="w-5 h-5 text-white" />
            <h2 className="text-white font-semibold text-lg">{titulo}</h2>
          </div>
        </div>

        <div className={`grid gap-4 px-4 py-2 ${colorScheme.tableHeader} border-b ${colorScheme.tableBorder}`}
             style={{ gridTemplateColumns: `repeat(${colunas.length}, minmax(0, 1fr))` }}>
          {colunas.map((coluna, index) => (
            <div key={index} className="text-white text-sm font-medium">
              {coluna}
            </div>
          ))}
        </div>

        <div className={`${colorScheme.divide} divide-y`}>
          {dados.length === 0 ? (
            <div className={`px-4 py-8 text-center ${colorScheme.textAlt} text-sm`}>
              Nenhum registro encontrado
            </div>
          ) : (
            dados.map((item, rowIndex) => (
              <div key={rowIndex} className={`grid gap-4 px-4 py-3 ${colorScheme.hover} transition-colors cursor-pointer`} style={{ gridTemplateColumns: `repeat(${colunas.length}, minmax(0, 1fr))` }}>
                {Object.values(item).map((valor, colIndex) => (
                  <div key={colIndex} className={`${colorScheme.text} text-sm`}>
                    {valor}
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TabelaPedidos;
