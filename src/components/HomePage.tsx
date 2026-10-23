import { dachas } from '../data/dachas';

interface HomePageProps {
  onStart: () => void;
}

export function HomePage({ onStart }: HomePageProps) {
  // Берём 6 случайных дач для галереи
  const galleryDachas = dachas.slice(0, 6);

  return (
    <div className="flex flex-col items-center px-4 py-6 max-w-lg mx-auto w-full">
      {/* Заголовок */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🏡 Дачагадайка
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Угадайте цену дачи в Ленинградской области! 
          10 случайных объявлений — насколько хорошо вы знаете рынок?
        </p>
      </div>

      {/* Фотогалерея */}
      <div className="w-full mb-6">
        <div className="grid grid-cols-3 gap-2">
          {galleryDachas.map((dacha) => (
            <div
              key={dacha.id}
              className="aspect-square rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center"
            >
              <img
                src={dacha.image}
                alt={dacha.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="flex items-center justify-center w-full h-full text-2xl">🏡</div>';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Бегунок-превью */}
      <div className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
        <p className="text-center text-gray-500 text-xs mb-3">
          Как это работает: вы видите описание дачи и двигаете бегунок, чтобы назвать цену
        </p>
        <div className="relative">
          <input
            type="range"
            min={0}
            max={35000000}
            defaultValue={5000000}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#26CD94]"
            disabled
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-400">0 ₽</span>
            <span className="text-xs text-gray-400">35 млн ₽</span>
          </div>
        </div>
      </div>

      {/* Кнопка запуска */}
      <button
        onClick={onStart}
        className="w-full py-4 px-6 bg-[#26CD94] hover:bg-[#20b884] active:bg-[#1aa374] text-white font-bold text-lg rounded-xl shadow-lg shadow-[#26CD94]/30 transition-all duration-200 active:scale-95"
      >
        🎮 Запустить игру
      </button>

      {/* Статистика */}
      <div className="mt-6 flex gap-4 text-center">
        <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
          <div className="text-lg font-bold text-[#26CD94]">10</div>
          <div className="text-xs text-gray-500">раундов</div>
        </div>
        <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
          <div className="text-lg font-bold text-[#26CD94]">30</div>
          <div className="text-xs text-gray-500">дач в базе</div>
        </div>
        <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
          <div className="text-lg font-bold text-[#26CD94]">∞</div>
          <div className="text-xs text-gray-500">веселья</div>
        </div>
      </div>
    </div>
  );
}
