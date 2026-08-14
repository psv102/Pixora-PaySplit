import React from 'react';
import { ShoppingBag, Percent, FileSpreadsheet, Ban, AlertTriangle } from 'lucide-react';

export const Problems: React.FC = () => {
  const problems = [
    {
      icon: ShoppingBag,
      title: 'Расходы на кассу и ОФД',
      description:
        'Необходимость покупки или аренды онлайн-кассы, приобретения фискального накопителя и ежегодной оплаты договора с оператором фискальных данных (ОФД).',
      tag: 'Постоянные затраты',
    },
    {
      icon: Percent,
      title: 'Высокий эквайринг (2–3%)',
      description:
        'Банки удерживают от 2% до 3% от объёма каждой безналичной транзакции, что ощутимо снижает чистую маржинальность оказываемых услуг.',
      tag: 'Потеря маржи',
    },
    {
      icon: FileSpreadsheet,
      title: 'Бухгалтерская рутина и возвраты',
      description:
        'Административная нагрузка по ведению кассовой дисциплины, согласованию чарджбэков, оформлению возвратов и регулярной отчётности перед налоговой.',
      tag: 'Бумажная нагрузка',
    },
    {
      icon: Ban,
      title: 'Упущенные клиенты',
      description:
        'Современный клиент предпочитает оплату картой или по QR-коду (СБП). Без удобного безналичного приёма компания теряет до 40% потенциальных заказов.',
      tag: 'Потеря выручки',
    },
  ];

  return (
    <section id="problems" className="py-16 md:py-24 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-red-700 mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Барьеры и сложности</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A2A6C] tracking-tight">
            С чем сталкивается бизнес?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Организация традиционного приёма безналичных платежей создаёт финансовую и административную нагрузку для сервисных компаний.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A2A6C] mb-2 group-hover:text-red-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
