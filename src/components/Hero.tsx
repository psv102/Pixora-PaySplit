import React from 'react';
import { Shield, Zap, Receipt, Building2, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-[#F8F9FA] overflow-hidden">
      {/* Decorative CSS background shapes */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Partner Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 border border-amber-300 text-xs sm:text-sm font-semibold text-[#1A2A6C] mb-6 shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>Платёжная система —</span>
            <span className="bg-[#FFD700] text-gray-900 font-extrabold px-2.5 py-0.5 rounded shadow-2xs tracking-wide">
              Уполномоченный банк
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A2A6C] tracking-tight leading-[1.15] mb-6">
            Принимайте безналичные платежи{' '}
            <span className="relative inline-block text-amber-600 underline decoration-[#FFD700] decoration-wavy underline-offset-8">
              без кассы и эквайринга
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Мультисплитование, онлайн-касса, полная легальность по 54-ФЗ для ИП и ООО
          </p>

          {/* Quick Informational Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left mt-8">
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs hover:border-amber-300 transition-all">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
                <Receipt className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold text-[#1A2A6C]">0 ₽</div>
              <div className="text-xs text-gray-500 font-medium leading-snug">
                Без затрат на покупку и аренду кассы
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs hover:border-blue-300 transition-all">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1A2A6C] flex items-center justify-center mb-2">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold text-[#1A2A6C]">0 %</div>
              <div className="text-xs text-gray-500 font-medium leading-snug">
                Исполнитель не платит за эквайринг
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs hover:border-emerald-300 transition-all">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold text-[#1A2A6C]">100% 54-ФЗ</div>
              <div className="text-xs text-gray-500 font-medium leading-snug">
                Чеки выбивает и отправляет Агент
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs hover:border-purple-300 transition-all">
              <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold text-[#1A2A6C]">Банк-партнёр</div>
              <div className="text-xs text-gray-500 font-medium leading-snug">
                Расчёты через номинальный счёт
              </div>
            </div>
          </div>

          {/* White-Label Banner Card */}
          <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-[#1A2A6C] to-[#2A3B8C] text-white shadow-lg text-left flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFD700] text-gray-900 flex-shrink-0 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6 text-[#1A2A6C]" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg text-[#FFD700]">
                  White-Label платёжное решение для бизнеса
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 mt-0.5">
                  Готовая инфраструктура для вашей сети или платформы услуг. Клиент оплачивает онлайн, а деньги автоматически расщепляются между участниками сделки.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 text-xs font-semibold px-3.5 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-amber-200">
              Легальная агентская схема
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
