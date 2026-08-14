import React from 'react';
import { LayoutDashboard, CreditCard, Receipt, FileCheck, ShieldAlert, Check, ShieldOff } from 'lucide-react';

export const ServiceFeatures: React.FC = () => {
  const serviceList = [
    {
      title: 'Личный кабинет + витрина услуг',
      icon: LayoutDashboard,
      description: 'Интуитивная онлайн-панель для создания витрины услуг, выставления счетов и аналитики продаж.',
    },
    {
      title: 'Приём безналичных платежей',
      icon: CreditCard,
      description: 'Поддержка всех популярный способов: банковские карты (Visa, Mastercard, МИР), СБП (QR-код), SberPay и T-Pay.',
    },
    {
      title: 'Печать и отправка чеков по 54-ФЗ',
      icon: Receipt,
      description: 'Формирование и фискализация электронных чеков с двойной маркировкой реквизитов (Исполнитель + Платёжный Агент).',
    },
    {
      title: 'Юридические закрывающие документы',
      icon: FileCheck,
      description: 'Автоматическая генерация агентских отчетов и актов для простой бухотчётности и подачи данных в ИФНС.',
    },
    {
      title: 'Управление холдом и возвратами',
      icon: ShieldAlert,
      description: 'Удобный инструмент заморозки средств на период выполнения заказа и инструмент проведения частичных или полных возвратов.',
    },
  ];

  return (
    <section id="service" className="py-16 md:py-24 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#1A2A6C] mb-3">
            <LayoutDashboard className="w-3.5 h-3.5 text-blue-600" />
            <span>Инфраструктура платформы</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A2A6C] tracking-tight">
            Что входит в сервис
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Платёжный агент берёт на себя все технические, фискальные и банковские процессы, предоставляя готовый White-Label инструментарий.
          </p>
        </div>

        {/* Included Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:border-[#1A2A6C] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#1A2A6C] flex items-center justify-center font-bold mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1A2A6C] mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>{item.title}</span>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Autonomy Disclaimer Block (Explicit requirement from prompt) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-dashed border-amber-300 shadow-xs max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#FFD700] text-[#1A2A6C] flex items-center justify-center flex-shrink-0 font-bold">
            <ShieldOff className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-lg font-extrabold text-[#1A2A6C] mb-1">
              Полная автономность Исполнителя
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Мы <span className="font-bold text-gray-900">не вмешиваемся</span> в качество оказываемых услуг, ценообразование, стандарты обслуживания и непосредственные отношения с вашими клиентами. Вы сохраняете полную независимость и контроль над собственным бизнесом.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
