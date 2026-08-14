import React from 'react';
import { CreditCard, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A2A6C] text-white pt-12 pb-10 border-t border-blue-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 border-b border-white/10 items-start">
          
          {/* Brand Info */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#FFD700] text-[#1A2A6C] flex items-center justify-center font-bold text-xl shadow-sm">
                <CreditCard className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Pay<span className="text-[#FFD700]">Split</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              White-Label платёжная платформа с мультисплитованием и онлайн-кассой для бизнеса. Полное соответствие 54-ФЗ и ГК РФ.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-amber-300">
              <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
              <span>Расчёты через уполномоченный банк-партнёр</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:justify-self-end">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FFD700] mb-4">
              Разделы платформы
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-xs font-medium text-gray-300">
              <li>
                <a href="#problems" className="hover:text-amber-300 transition-colors">
                  Проблема бизнеса
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-amber-300 transition-colors">
                  Решение: Платёжный агент
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-amber-300 transition-colors">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#economics" className="hover:text-amber-300 transition-colors">
                  Экономика сделки
                </a>
              </li>
              <li>
                <a href="#service" className="hover:text-amber-300 transition-colors">
                  Что входит в сервис
                </a>
              </li>
              <li>
                <a href="#responsibility" className="hover:text-amber-300 transition-colors">
                  Распределение ответственности
                </a>
              </li>
              <li>
                <a href="#audience" className="hover:text-amber-300 transition-colors">
                  Кому подходит
                </a>
              </li>
              <li>
                <a href="#legal" className="hover:text-amber-300 transition-colors">
                  Юридическая конструкция
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 PaySplit. Все права защищены.
          </div>
          <div className="text-gray-400">
            Платёжные операции осуществляются в соответствии с законодательством РФ (54-ФЗ, 161-ФЗ).
          </div>
        </div>

      </div>
    </footer>
  );
};
