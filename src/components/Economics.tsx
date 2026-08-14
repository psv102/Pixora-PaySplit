import React, { useState } from 'react';
import { Calculator, CheckCircle2, DollarSign, Wallet, ShieldCheck, ArrowRight } from 'lucide-react';

export const Economics: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000);

  // Calculate proportional economics based on 1000 RUB base ratio
  const acquiringFee = Math.round(amount * 0.025); // 2.5%
  const kassaFee = Math.round(amount * 0.008); // ~0.8% (5-10 RUB per 1000)
  const agentShare = Math.round(amount * 0.15); // 15%
  const executorShare = amount - agentShare; // 85%

  const formatRubles = (val: number) => {
    return new Intl.NumberFormat('ru-RU').format(val) + ' ₽';
  };

  return (
    <section id="economics" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-xs font-semibold text-[#1A2A6C] mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            <span>Финансовая прозрачность</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A2A6C] tracking-tight">
            Экономика сделки
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Наглядное распределение средств при приёме платежа. Исполнитель получает чистые 85% и полностью освобождён от расходов на эквайринг и кассу.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="mb-10 max-w-4xl mx-auto p-4 rounded-xl bg-[#FFD700]/20 border border-[#FFD700] text-center">
          <p className="text-base sm:text-lg font-bold text-[#1A2A6C] flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span>Исполнитель не платит за эквайринг и кассу!</span>
          </p>
        </div>

        {/* Benchmark 1000 RUB Example Box + Interactive Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Fixed Standard Example (1 000 руб.) */}
          <div className="lg:col-span-6 bg-[#F8F9FA] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xs relative">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-200/80 px-2.5 py-1 rounded">
                Базовый пример
              </span>
              <span className="text-2xl font-extrabold text-[#1A2A6C]">1 000 ₽</span>
            </div>

            <div className="space-y-3.5 text-sm">
              <div className="p-3 bg-white rounded-xl border border-gray-200 flex items-center justify-between">
                <span className="font-medium text-gray-700">Оплата клиентом:</span>
                <span className="font-bold text-[#1A2A6C] text-base">1 000 руб.</span>
              </div>

              <div className="p-3 bg-red-50/70 rounded-xl border border-red-100 flex items-center justify-between">
                <div>
                  <span className="font-medium text-red-900 block">Эквайринг (2,5%)</span>
                  <span className="text-[11px] text-red-600 font-semibold">платит Агент</span>
                </div>
                <span className="font-bold text-red-700">–25 руб.</span>
              </div>

              <div className="p-3 bg-red-50/70 rounded-xl border border-red-100 flex items-center justify-between">
                <div>
                  <span className="font-medium text-red-900 block">Касса, ОФД, налоги</span>
                  <span className="text-[11px] text-red-600 font-semibold">платит Агент</span>
                </div>
                <span className="font-bold text-red-700">–5…10 руб.</span>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between">
                <div>
                  <span className="font-medium text-amber-900 block">Доля агента (вознаграждение)</span>
                  <span className="text-[11px] text-amber-700 font-semibold">комиссия 15%</span>
                </div>
                <span className="font-bold text-amber-800">~120 руб.</span>
              </div>

              <div className="p-4 bg-emerald-500 text-white rounded-xl shadow-sm flex items-center justify-between mt-4">
                <div>
                  <span className="text-xs text-emerald-100 uppercase font-semibold block">Доля Исполнителя</span>
                  <span className="text-sm font-medium">Чистое зачисление</span>
                </div>
                <span className="text-2xl font-black">850 руб.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Amount Calculator */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md">
            <h3 className="text-lg font-bold text-[#1A2A6C] mb-2 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-amber-500" />
              <span>Калькулятор расчёта сделки</span>
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Передвиньте ползунок, чтобы увидеть расчёт для вашего среднего чека
            </p>

            {/* Range Slider Control */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-gray-600">Сумма платежа от клиента:</label>
                <span className="text-xl font-extrabold text-[#1A2A6C] bg-amber-100 px-3 py-1 rounded-lg">
                  {formatRubles(amount)}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="500000"
                step="1000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1A2A6C]"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>1 000 ₽</span>
                <span>100 000 ₽</span>
                <span>500 000 ₽</span>
              </div>
            </div>

            {/* Calculated Breakdown Cards */}
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-xl flex items-center justify-between text-xs sm:text-sm">
                <span className="text-gray-600">Расходы на эквайринг (2.5%):</span>
                <span className="font-semibold text-gray-900 bg-red-100 px-2 py-0.5 rounded text-red-700">
                  {formatRubles(acquiringFee)} <span className="text-[10px] text-gray-500 font-normal">(оплачено Агентом)</span>
                </span>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl flex items-center justify-between text-xs sm:text-sm">
                <span className="text-gray-600">Расходы на кассу и фискализацию:</span>
                <span className="font-semibold text-gray-900 bg-red-100 px-2 py-0.5 rounded text-red-700">
                  {formatRubles(kassaFee)} <span className="text-[10px] text-gray-500 font-normal">(оплачено Агентом)</span>
                </span>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl flex items-center justify-between text-xs sm:text-sm">
                <span className="text-gray-700 font-medium">Вознаграждение Агента (15%):</span>
                <span className="font-bold text-amber-800">
                  {formatRubles(agentShare)}
                </span>
              </div>

              <div className="p-4 bg-[#1A2A6C] text-white rounded-xl shadow-xs flex items-center justify-between">
                <div>
                  <div className="text-xs text-amber-300 font-semibold">К ПЕРЕЧИСЛЕНИЮ ИСПОЛНИТЕЛЮ (85%)</div>
                  <div className="text-2xl font-extrabold text-white">{formatRubles(executorShare)}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FFD700] text-gray-900 flex items-center justify-center font-bold">
                  <Wallet className="w-5 h-5 text-[#1A2A6C]" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
