import React from 'react';
import { ShieldCheck, Landmark, MonitorCheck, Receipt, Sparkles, Check } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Solution Container */}
        <div className="bg-gradient-to-br from-slate-900 via-[#1A2A6C] to-slate-800 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          {/* Subtle Background Accent Graphic */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD700]/20 border border-[#FFD700]/30 text-amber-300 text-xs font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              <span>Готовое решение</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Мы — платёжный агент
            </h2>

            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
              У нас есть договор с банком на мультисплитование, зарегистрированная онлайн-касса и подключённый эквайринг. Исполнитель получает личный кабинет, витрину услуг и полноценную возможность принимать безналичную оплату. Чек автоматически направляется покупателю с двумя реквизитами — исполнителя и агента.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#FFD700] text-gray-900 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                  <Landmark className="w-4 h-4 text-[#1A2A6C]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Договор с Банком-партнёром</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Номинальный счёт и расщепление платежей на банковском уровне.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#FFD700] text-gray-900 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                  <MonitorCheck className="w-4 h-4 text-[#1A2A6C]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">ЛК и витрина услуг</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Управление заказами, ссылки на оплату и финансовая аналитика.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#FFD700] text-gray-900 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                  <Receipt className="w-4 h-4 text-[#1A2A6C]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Чеки по 54-ФЗ</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Автоматическая фискализация с двойными реквизитами (Агент + Исполнитель).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#FFD700] text-gray-900 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#1A2A6C]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Полная легальность</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Соответствие требованиям ЦБ РФ и налоговому законодательству.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom summary checklist */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-4 text-xs font-medium text-amber-200">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#FFD700]" /> Без покупки кассы
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#FFD700]" /> Без договора с ОФД
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#FFD700]" /> Защита от чарджбэков
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
