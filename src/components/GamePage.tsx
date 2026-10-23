import { useState, useEffect, useRef } from 'react';
import { Dacha, getRandomDachas, formatPrice, calculateScore } from '../data/dachas';
import { GameResult } from '../App';

interface GamePageProps {
  onFinish: (result: GameResult) => void;
}

export function GamePage({ onFinish }: GamePageProps) {
  const [dachas, setDachas] = useState<Dacha[]>([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [guess, setGuess] = useState(5000000);
  const [showResult, setShowResult] = useState(false);
  const [roundScore, setRoundScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [totalOverpaid, setTotalOverpaid] = useState(0);
  const [lastDiff, setLastDiff] = useState(0);
  const sliderRef = useRef<HTMLInputElement>(null);
  const [animated, setAnimated] = useState(false);

  // Инициализация
  useEffect(() => {
    const randomDachas = getRandomDachas(10);
    setDachas(randomDachas);
    // Анимация бегунка при первом запуске
    setTimeout(() => setAnimated(true), 300);
  }, []);

  // Анимация бегунка при первом раунде
  useEffect(() => {
    if (currentRound === 0 && animated && sliderRef.current) {
      let pos = 0;
      const target = 17500000;
      const step = target / 50;
      const interval = setInterval(() => {
        pos += step;
        if (pos >= target) {
          pos = target;
          clearInterval(interval);
        }
        setGuess(Math.round(pos));
      }, 20);
      return () => clearInterval(interval);
    }
  }, [currentRound, animated]);

  if (dachas.length === 0) return null;

  const currentDacha = dachas[currentRound];
  const progress = ((currentRound) / 10) * 100;

  const handleGuess = () => {
    const score = calculateScore(guess, currentDacha.price);
    const diff = guess - currentDacha.price;
    setRoundScore(score);
    setLastDiff(diff);
    setTotalOverpaid(prev => prev + diff);
    setShowResult(true);
  };

  const handleNext = () => {
    const newTotal = totalScore + roundScore;
    setTotalScore(newTotal);

    if (currentRound >= 9) {
      // Игра окончена
      const avgScore = Math.round(newTotal / 10);
      onFinish({
        totalScore: newTotal,
        rounds: 10,
        avgScore,
        overpaid: totalOverpaid
      });
      return;
    }

    setCurrentRound(prev => prev + 1);
    setGuess(5000000);
    setShowResult(false);
    setRoundScore(0);
  };

  const diffPercent = Math.round((Math.abs(lastDiff) / currentDacha.price) * 100);

  return (
    <div className="flex flex-col px-4 py-4 max-w-lg mx-auto w-full min-h-[calc(100vh-60px)]">
      {/* Прогресс-бар */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-medium text-gray-500">
            Раунд {currentRound + 1} из 10
          </span>
          <span className="text-xs font-medium text-[#26CD94]">
            Очки: {totalScore + (showResult ? roundScore : 0)}
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#26CD94] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Карточка дачи */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex-1 flex flex-col">
        {/* Фото */}
        <div className="relative h-36 sm:h-44 bg-gray-200 flex items-center justify-center">
          <img
            src={currentDacha.image}
            alt={currentDacha.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="flex items-center justify-center w-full h-full text-4xl">🏡</div>';
            }}
          />
          <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            {currentDacha.direction}
          </div>
          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            {currentDacha.material}
          </div>
        </div>

        {/* Информация */}
        <div className="p-3 sm:p-4 flex-1 flex flex-col">
          <h2 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
            {currentDacha.title}
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed line-clamp-3">
            {currentDacha.description}
          </p>

          {/* Характеристики */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3">
            <div className="bg-gray-50 rounded-lg p-1.5 sm:p-2 text-center">
              <div className="text-[10px] sm:text-xs text-gray-500">Участок</div>
              <div className="text-xs sm:text-sm font-bold text-gray-800">{currentDacha.area} сот.</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-1.5 sm:p-2 text-center">
              <div className="text-[10px] sm:text-xs text-gray-500">Дом</div>
              <div className="text-xs sm:text-sm font-bold text-gray-800">{currentDacha.houseArea} м²</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-1.5 sm:p-2 text-center">
              <div className="text-[10px] sm:text-xs text-gray-500">До КАД</div>
              <div className="text-xs sm:text-sm font-bold text-gray-800">{currentDacha.distance} км</div>
            </div>
          </div>

          {/* Бегунок */}
          <div className="mt-auto">
            {!showResult ? (
              <>
                <div className="text-center mb-2">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">
                    {formatPrice(guess)}
                  </span>
                </div>
                <input
                  ref={sliderRef}
                  type="range"
                  min={100000}
                  max={35000000}
                  step={100000}
                  value={guess}
                  onChange={(e) => setGuess(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#26CD94] touch-manipulation"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] sm:text-xs text-gray-400">100 тыс</span>
                  <span className="text-[10px] sm:text-xs text-gray-400">35 млн</span>
                </div>
                <button
                  onClick={handleGuess}
                  className="w-full mt-3 py-3 bg-[#26CD94] hover:bg-[#20b884] active:bg-[#1aa374] text-white font-bold rounded-xl transition-all active:scale-95 text-sm sm:text-base"
                >
                  Оценить 💰
                </button>
              </>
            ) : (
              <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                <div className="flex justify-between mb-3">
                  <div className="text-center flex-1">
                    <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5">Ваша цена</div>
                    <div className="text-sm sm:text-lg font-bold text-gray-800">{formatPrice(guess)}</div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5">Правильная</div>
                    <div className="text-sm sm:text-lg font-bold text-[#26CD94]">{formatPrice(currentDacha.price)}</div>
                  </div>
                </div>
                <div className="text-center mb-2">
                  <div className={`text-xs sm:text-sm font-medium ${lastDiff > 0 ? 'text-red-500' : 'text-blue-500'}`}>
                    {lastDiff > 0
                      ? `📈 Больше на ${formatPrice(Math.abs(lastDiff))}`
                      : `📉 Меньше на ${formatPrice(Math.abs(lastDiff))}`
                    }
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 mt-0.5">Разница: {diffPercent}%</div>
                </div>
                <div className="text-center mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gray-200 text-gray-700">
                    +{roundScore} очков
                  </span>
                </div>
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-[#26CD94] hover:bg-[#20b884] active:bg-[#1aa374] text-white font-bold rounded-xl transition-all active:scale-95 text-sm sm:text-base"
                >
                  {currentRound >= 9 ? 'Показать результат 🏆' : 'Далее →'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
