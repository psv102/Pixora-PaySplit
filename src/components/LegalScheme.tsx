import React from 'react';
import { FileCode, Landmark, Receipt, ArrowRightLeft, FileSpreadsheet, ShieldCheck } from 'lucide-react';

export const LegalScheme: React.FC = () => {
  const legalPillars = [
    {
      title: 'Агентский договор (ГК РФ Глава 52)',
      icon: FileCode,
      law: 'ГК РФ Гл. 52',
      description:
        'Официальный договор между Агентом и Исполнителем. Агент действует по поручению Исполнителя от своего имени, но за счёт Исполнителя.',
    },
    {
      title: 'Номинальный счёт в банке-партнёре',
      icon: Landmark,
      law: 'Ст. 860.1 ГК РФ',
      description:
        'Средства Исполнителя учитываются на спецсчёте в банке-партнёре. Деньги законодательно защищены: они не являются собственностью Агента и не могут быть арестованы за долги Агента.',
    },
    {
      title: 'Онлайн-касса на стороне Агента',
      icon: Receipt,
      law: '54-ФЗ',
      description:
        'Агент является официальным фискализатором платежа. Исполнительному юрлицу не требуется закупать ККТ, фискальный накопитель и заключить договор с ОФД.',
    },
    {
      title: 'Автоматическое мультисплитование',
      icon: ArrowRightLeft,
      law: 'Банковский сплит',
      description:
        'Банк-партнёр автоматически расщепляет транзакцию: вознаграждение агента уходит Агенту, а 85% поступают на банковский расчётный счёт Исполнителя.',
    },
    {
      title: 'Налоговая отчётность и Акты',
      icon: FileSpreadsheet,
      law: 'ИФНС РФ',
      description:
        'Агент регулярно предоставляет Исполнителю официальные агентские отчеты и акты оказанных услуг для бухгалтерского и налогового учёта.',
    },
  ];

  return (
    <section id="legal" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-xs font-semibold text-[#1A2A6C] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>Законодательное соответствие</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A2A6C] tracking-tight">
            Юридическая конструкция
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Полная правовая прозрачность перед контролирующими органами, банками и налоговой инспекцией (ИФНС).
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {legalPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-200 shadow-xs hover:border-[#1A2A6C] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1A2A6C] text-[#FFD700] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#1A2A6C] bg-amber-100 px-2.5 py-1 rounded-md border border-amber-200">
                      {item.law}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A2A6C] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tax Note Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-white max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFD700] text-gray-900 flex items-center justify-center font-bold flex-shrink-0">
              📋
            </div>
            <div>
              <h4 className="font-bold text-white text-sm sm:text-base">
                Налоговый учёт Исполнителя
              </h4>
              <p className="text-xs sm:text-sm text-gray-300">
                Исполнитель самостоятельно отчитывается перед ИФНС за полученный доход (85%), прикладывая агентские отчеты от платформы.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-300 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 flex-shrink-0">
            Чистая отчётность
          </span>
        </div>

      </div>
    </section>
  );
};
