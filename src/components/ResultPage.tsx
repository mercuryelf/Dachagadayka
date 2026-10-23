import { GameResult } from '../App';
import { getResultTier, getResultText, formatPrice } from '../data/dachas';

interface ResultPageProps {
  result: GameResult;
  onRestart: () => void;
}

export function ResultPage({ result, onRestart }: ResultPageProps) {
  const tier = getResultTier(result.avgScore);
  const resultInfo = getResultText(tier);
  const overpaid = result.overpaid;

  return (
    <div className="flex flex-col items-center px-4 py-8 max-w-lg mx-auto w-full">
      {/* Эмодзи-результат */}
      <div className="text-6xl mb-4 animate-bounce">
        {resultInfo.emoji}
      </div>

      {/* Заголовок */}
      <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        {resultInfo.title}
      </h1>
      <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
        {resultInfo.description}
      </p>

      {/* Статистика */}
      <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#26CD94]">
              {result.totalScore}
            </div>
            <div className="text-xs text-gray-500 mt-1">Всего очков</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#26CD94]">
              {result.avgScore}
            </div>
            <div className="text-xs text-gray-500 mt-1">Средний балл</div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-4 pt-4">
          <div className="text-center">
            <div className={`text-xl font-bold ${overpaid > 0 ? 'text-red-500' : 'text-blue-500'}`}>
              {overpaid > 0
                ? `Переплата: ${formatPrice(overpaid)}`
                : `Недоплата: ${formatPrice(Math.abs(overpaid))}`
              }
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {overpaid > 0
                ? 'Вы бы переплатили за все дачи'
                : 'Вы бы сэкономили на всех дачах'
              }
            </div>
          </div>
        </div>
      </div>

      {/* Шкала результата */}
      <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
        <div className="text-sm font-medium text-gray-700 mb-3">Ваш результат на шкале:</div>
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full"
            style={{ width: '100%' }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-gray-800 rounded-full shadow-md transition-all duration-1000"
            style={{ left: `${Math.min(Math.max(result.avgScore, 2), 98)}%`, transform: 'translate(-50%, -50%)' }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>🏚️ Уходи с моей дачи</span>
          <span>💰 Щедрый дачник</span>
          <span>🌱 Опытный огородник</span>
        </div>
      </div>

      {/* Кнопка перезапуска */}
      <button
        onClick={onRestart}
        className="w-full py-4 px-6 bg-[#26CD94] hover:bg-[#20b884] active:bg-[#1aa374] text-white font-bold text-lg rounded-xl shadow-lg shadow-[#26CD94]/30 transition-all duration-200 active:scale-95"
      >
        🔄 Играть снова
      </button>
    </div>
  );
}
