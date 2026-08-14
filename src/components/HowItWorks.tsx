import React from 'react';
import { CreditCard, CheckSquare, Clock, ArrowRightLeft, ShieldCheck, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Оплата покупателем (Холд)',
      icon: CreditCard,
      description:
        'Покупатель оплачивает услугу банковской картой или СБП на витрине. Средства сразу поступают и резервируются на номинальном счёте Агента в банке-партнёре (холд).',
      badge: 'Номинальный счёт в банке',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      number: '02',
      title: 'Оказание услуги и отметка в ЛК',
      icon: CheckSquare,
      description:
        'Исполнитель качественно выполняет работу или оказывает услугу, после чего отмечает успешный статус завершения заказа в своём личном кабинете.',
      badge: 'Личный кабинет Исполнителя',
      color: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      number: '03',
      title: 'Период холда (3 дня)',
      icon: Clock,
      description:
        'Агент выдерживает короткий период холда (например, 3 дня). Это обеспечивает защиту от претензий и необоснованных возвратов со стороны покупателя.',
      badge: 'Защита от чарджбэков',
      color: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    {
      number: '04',
      title: 'Автоматический мультисплит',
      icon: ArrowRightLeft,
      description:
        'Банк на уровне системы расщепляет платеж: комиссия Агента (15%) переводится Агенту, а основной остаток (85%) поступает на счёт Исполнителя за 1–3 рабочих дня.',
      badge: 'Выплата 85% Исполнителю',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#1A2A6C] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Прозрачный алгоритм</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A2A6C] tracking-tight">
            Как это работает
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            4 понятных шага от оплаты клиентом до автоматического зачисления денег на ваш расчётный счёт
          </p>
        </div>

        {/* Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-xs hover:border-[#1A2A6C] hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1A2A6C] text-[#FFD700] flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold text-[#1A2A6C]/20 group-hover:text-[#1A2A6C]/40 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A2A6C] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded border ${step.color}`}>
                    {step.badge}
                  </span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-gray-300" />
                  )}
                </div>
              </div>
            );
          })}

        </div>

        {/* Informational Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50/80 border border-amber-200/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFD700] text-gray-900 font-bold flex items-center justify-center flex-shrink-0">
              ℹ️
            </div>
            <div>
              <h4 className="font-bold text-[#1A2A6C] text-sm sm:text-base">
                Надёжная защита средств обеих сторон
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Номинальный счёт в уполномоченном банке законодательно изолирует средства исполнителя. Ни агент, ни сторонние лица не могут списать или заблокировать эти деньги.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-[#1A2A6C] bg-white px-3 py-1.5 rounded-lg border border-amber-200 flex-shrink-0">
            Ст. 860.1 ГК РФ
          </span>
        </div>

      </div>
    </section>
  );
};
