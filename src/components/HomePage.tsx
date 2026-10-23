import React from 'react';
import { dachas } from '../data/dachas';

interface HomePageProps {
  onStart: () => void;
}

export function HomePage({ onStart }: HomePageProps) {
  // Берём 6 случайных дач для галереи
  const galleryDachas = dachas.slice(0, 6);

  return (
    <div className="flex flex-col items-center px-4 py-5 max-w-lg mx-auto w-full">
      {/* Заголовок */}
      <div className="text-center mb-5">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          🏡 Дачагадайка
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
          Угадайте цену дачи в Ленинградской области! 
          10 случайных объявлений — насколько хорошо вы знаете рынок?
        </p>
      </div>

      {/* Фотогалерея */}
      <div className="w-full mb-5">
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {galleryDachas.map((dacha) => (
            <div
              key={dacha.id}
              className="aspect-square rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-sm"
            >
              <img
                src={dacha.image}
                alt={dacha.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'flex items-center justify-center w-full h-full text-2xl bg-gradient-to-br from-green-50 to-green-100';
                    fallback.textContent = '🏡';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Бегунок-превью */}
      <div className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-5">
        <p className="text-center text-gray-500 text-xs mb-3">
          Вы видите описание дачи и двигаете бегунок, чтобы назвать свою цену
        </p>
        <div className="relative">
          <input
            type="range"
            min={0}
            max={35000000}
            defaultValue={5000000}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{ '--range-progress': '14%' } as React.CSSProperties}
            disabled
          />
          <div className="flex justify-between mt-1">
            <span className="text-[10px] text-gray-400">0 ₽</span>
            <span className="text-[10px] text-gray-400">35 млн ₽</span>
          </div>
        </div>
      </div>

      {/* Кнопка запуска */}
      <button
        onClick={onStart}
        className="w-full py-4 px-6 bg-[#26CD94] hover:bg-[#20b884] active:bg-[#1aa374] text-white font-bold text-lg rounded-xl shadow-lg shadow-[#26CD94]/30 transition-all duration-200 active:scale-[0.97]"
      >
        🎮 Запустить игру
      </button>

      {/* Статистика */}
      <div className="mt-5 flex gap-3 text-center">
        <div className="bg-white rounded-xl px-4 py-2.5 shadow-sm border border-gray-100 min-w-[70px]">
          <div className="text-lg font-bold text-[#26CD94]">10</div>
          <div className="text-[10px] text-gray-500">раундов</div>
        </div>
        <div className="bg-white rounded-xl px-4 py-2.5 shadow-sm border border-gray-100 min-w-[70px]">
          <div className="text-lg font-bold text-[#26CD94]">30</div>
          <div className="text-[10px] text-gray-500">дач в базе</div>
        </div>
        <div className="bg-white rounded-xl px-4 py-2.5 shadow-sm border border-gray-100 min-w-[70px]">
          <div className="text-lg font-bold text-[#26CD94]">∞</div>
          <div className="text-[10px] text-gray-500">веселья</div>
        </div>
      </div>

      {/* Как играть */}
      <div className="w-full mt-5 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold text-gray-800 mb-2">Как играть?</h3>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-sm">1️⃣</span>
            <span className="text-xs text-gray-600">Читаете описание дачи</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-sm">2️⃣</span>
            <span className="text-xs text-gray-600">Двигаете бегунок, чтобы назвать цену</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-sm">3️⃣</span>
            <span className="text-xs text-gray-600">Нажимаете «Оценить» и видите результат</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-sm">4️⃣</span>
            <span className="text-xs text-gray-600">После 10 раундов — ваш итоговый балл!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
