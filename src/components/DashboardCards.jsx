
import React from 'react';
import { Check, DollarSign, XCircle, Clock } from 'lucide-react';

export default function DashboardCards() {
  const cards = [
    {
      title: 'Carros entregues',
      value: '49',
      icon: Check,
      bgColor: 'bg-blue-700',
      iconBg: 'bg-blue-800'
    },
    {
      title: 'Faturamento',
      value: 'R$20.000,00',
      icon: DollarSign,
      bgColor: 'bg-green-800',
      iconBg: 'bg-green-900'
    },
    {
      title: 'Manutenções Vencidas',
      value: '49',
      icon: XCircle,
      bgColor: 'bg-red-900',
      iconBg: 'bg-red-950'
    },
    {
      title: 'Manutenções a fazer',
      value: '49',
      icon: Clock,
      bgColor: 'bg-yellow-700',
      iconBg: 'bg-yellow-800'
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className={`${card.bgColor} rounded-lg p-6 shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`${card.iconBg} rounded-lg p-2`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white text-sm font-medium">{card.title}</h3>
              </div>
              <div className="text-white text-4xl font-bold text-center">
                {card.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}