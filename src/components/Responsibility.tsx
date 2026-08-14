import React from 'react';
import { Scale, User, Building, Receipt, FileText } from 'lucide-react';

export const Responsibility: React.FC = () => {
  return (
    <section id="responsibility" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-xs font-semibold text-[#1A2A6C] mb-3">
            <Scale className="w-3.5 h-3.5 text-amber-700" />
            <span>Юридический разграничитель</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A2A6C] tracking-tight">
            Распределение ответственности
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Чёткое разграничение зональности между Исполнителем (вами) и Платёжным Агентом гарантирует юридическую чистоту бизнеса.
          </p>
        </div>

        {/* 2 Columns: Executor vs Agent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
          
          {/* Column 1: Executor */}
          <div className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xs relative flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1A2A6C] flex items-center justify-center font-bold">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A2A6C]">Зона ответственности Исполнителя</h3>
                  <span className="text-xs text-gray-500 font-medium">Ваше ИП или ООО</span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 block">Качество услуг и соблюдение сроков:</strong>
                    Непосредственное выполнение работ, оказание сервиса и урегулирование потребительских претензий.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 block">Возвраты по вине Исполнителя:</strong>
                    В случае мотивированного отказа клиента от услуги Исполнитель возмещает сумму возврата Агенту.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 block">Налоговая отчётность:</strong>
                    Самостоятельный учёт доходов и уплата налогов на основании отчетов Агента.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-semibold text-blue-800 bg-blue-50 px-3 py-2 rounded-lg text-center">
              Отвечает за производственную часть
            </div>
          </div>

          {/* Column 2: Agent */}
          <div className="bg-[#1A2A6C] text-white rounded-2xl p-6 sm:p-8 shadow-md relative flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/15">
                <div className="w-10 h-10 rounded-xl bg-[#FFD700] text-[#1A2A6C] flex items-center justify-center font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Зона ответственности Агента</h3>
                  <span className="text-xs text-amber-300 font-medium">Платёжная платформа PaySplit</span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FFD700] mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Безналичный эквайринг:</strong>
                    Бесперебойный приём платежей, безопасность онлайн-транзакций и интеграция с банком-партнёром.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FFD700] mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Фискализация и чеки по 54-ФЗ:</strong>
                    Формирование и мгновенная отправка электронного кассового чека покупателю.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FFD700] mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Мультисплитование и перечисление:</strong>
                    Своевременный перерасчёт и зачисление 85% выручки на счёт Исполнителя после окончания холда.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 text-xs font-bold text-[#FFD700] bg-white/10 px-3 py-2 rounded-lg text-center backdrop-blur-sm">
              Отвечает за финансово-кассовую часть
            </div>
          </div>

        </div>

        {/* Receipt Dual Details Highlight Box */}
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFD700] text-gray-900 flex items-center justify-center font-bold flex-shrink-0">
              <Receipt className="w-5 h-5 text-[#1A2A6C]" />
            </div>
            <div>
              <h4 className="font-bold text-[#1A2A6C] text-sm sm:text-base">
                Двойные реквизиты в кассовом чеке согласно 54-ФЗ
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                Покупатель получает официальный чек с чётким указанием:
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-amber-300 font-mono text-xs text-[#1A2A6C] shadow-2xs">
            <FileText className="w-4 h-4 text-amber-600" />
            <span>«Исполнитель: [Ваше ИП/ООО]»</span>
            <span className="text-gray-300">|</span>
            <span>«Агент: [Данные Агента]»</span>
          </div>
        </div>

      </div>
    </section>
  );
};
