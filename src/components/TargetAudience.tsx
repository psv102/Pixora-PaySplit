import React from 'react';
import { Hammer, Sparkles, Wrench, GraduationCap, Stethoscope, Scissors, Building2, Briefcase } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const categories = [
    {
      title: 'Строительство и ремонт',
      icon: Hammer,
      description: 'Строительные бригады, отделочные работы, монтаж окон, дверей, кондиционеров и сантехники.',
    },
    {
      title: 'Клининговые услуги',
      icon: Sparkles,
      description: 'Уборка квартир, офисов, химчистка мебели, мойка окон и профессиональный клининг.',
    },
    {
      title: 'Автосервисы и СТО',
      icon: Wrench,
      description: 'Авторемонтные мастерские, шиномонтаж, автомойки, детейлинг и кузовной ремонт.',
    },
    {
      title: 'Образование и курсы',
      icon: GraduationCap,
      description: 'Репетиторы, языковые школы, обучающие курсы, детские развивающие центры и тренинги.',
    },
    {
      title: 'Медицина и велнес',
      icon: Stethoscope,
      description: 'Частные медицинские кабинеты, анализы, массажные салоны, физиотерапия и СПА.',
    },
    {
      title: 'Салоны красоты',
      icon: Scissors,
      description: 'Парикмахерские, студии маникюра, косметология, барбершопы и эстетические центры.',
    },
    {
      title: 'Управляющие компании',
      icon: Building2,
      description: 'Сервисные службы ЖКХ, обслуживание недвижимости, локальные бытовые сервисы.',
    },
    {
      title: 'Другие сервисные компании',
      icon: Briefcase,
      description: 'ИП и ООО, оказывающие любые возмездные услуги физическим лицам B2C.',
    },
  ];

  return (
    <section id="audience" className="py-16 md:py-24 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#1A2A6C] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>Целевая аудитория</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A2A6C] tracking-tight">
            Кому подходит платформа
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Идеальное решение для ИП и ООО, предоставляющих услуги физическим лицам и стремящихся оптимизировать эквайринг и кассовые расходы.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:border-[#1A2A6C] hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#1A2A6C] flex items-center justify-center font-bold mb-4 group-hover:bg-[#1A2A6C] group-hover:text-[#FFD700] transition-colors duration-300">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A2A6C] mb-2 group-hover:text-amber-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
