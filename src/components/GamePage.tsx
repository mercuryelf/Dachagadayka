import React, { useState, useEffect, useRef } from 'react';
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
  const [cardVisible, setCardVisible] = useState(false);

  // Инициализация
  useEffect(() => {
    const randomDachas = getRandomDachas(10);
    setDachas(randomDachas);
    // Анимация бегунка при первом запуске
    setTimeout(() => {
      setAnimated(true);
      setCardVisible(true);
    }, 300);
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

  // Анимация появления карточки при смене раунда
  useEffect(() => {
    if (currentRound > 0) {
      setCardVisible(false);
      const timer = setTimeout(() => setCardVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, [currentRound]);

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

  // Обновляем CSS-переменную для прогресса бегунка
  const sliderProgress = ((guess - 100000) / (35000000 - 100000)) * 100;

  return (
    <div className="flex flex-col px-3 sm:px-4 py-3 sm:py-4 max-w-lg mx-auto w-full min-h-[calc(100dvh-56px)]">
      {/* Прогресс-бар */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs font-medium text-gray-500">
            Раунд {currentRound + 1} / 10
          </span>
          <span className="text-xs font-bold text-[#26CD94]">
            ⭐ {totalScore + (showResult ? roundScore : 0)}
          </span>
        </div>
        <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#26CD94] to-[#20b884] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Карточка дачи */}
      <div 
        className={`bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex-1 flex flex-col transition-all duration-300 ${
          cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        {/* Фото */}
        <div className="relative h-32 sm:h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
          <img
            src={currentDacha.image}
            alt={currentDacha.title}
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const fallback = document.createElement('div');
                fallback.className = 'flex items-center justify-center w-full h-full text-4xl bg-gradient-to-br from-green-100 to-green-50';
                fallback.textContent = '🏡';
                parent.appendChild(fallback);
              }
            }}
          />
          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full">
            📍 {currentDacha.direction}
          </div>
          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full">
            🏗️ {currentDacha.material}
          </div>
        </div>

        {/* Информация */}
        <div className="p-3 sm:p-4 flex-1 flex flex-col">
          <h2 className="font-bold text-gray-900 text-sm sm:text-base mb-1 leading-tight">
            {currentDacha.title}
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-2.5 leading-relaxed line-clamp-2 sm:line-clamp-3">
            {currentDacha.description}
          </p>

          {/* Характеристики */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3">
            <div className="bg-green-50 rounded-lg p-1.5 sm:p-2 text-center">
              <div className="text-[9px] sm:text-[10px] text-gray-500">Участок</div>
              <div className="text-[11px] sm:text-sm font-bold text-gray-800">{currentDacha.area} сот.</div>
            </div>
            <div className="bg-green-50 rounded-lg p-1.5 sm:p-2 text-center">
              <div className="text-[9px] sm:text-[10px] text-gray-500">Дом</div>
              <div className="text-[11px] sm:text-sm font-bold text-gray-800">{currentDacha.houseArea} м²</div>
            </div>
            <div className="bg-green-50 rounded-lg p-1.5 sm:p-2 text-center">
              <div className="text-[9px] sm:text-[10px] text-gray-500">До КАД</div>
              <div className="text-[11px] sm:text-sm font-bold text-gray-800">{currentDacha.distance} км</div>
            </div>
          </div>

          {/* Бегунок */}
          <div className="mt-auto">
            {!showResult ? (
              <>
                <div className="text-center mb-2">
                  <span className="text-lg sm:text-2xl font-bold text-gray-900 tabular-nums">
                    {formatPrice(guess)}
                  </span>
                </div>
                <div className="relative">
                  <input
                    ref={sliderRef}
                    type="range"
                    min={100000}
                    max={35000000}
                    step={100000}
                    value={guess}
                    onChange={(e) => setGuess(Number(e.target.value))}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer touch-manipulation"
                    style={{ '--range-progress': `${sliderProgress}%` } as React.CSSProperties}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] sm:text-xs text-gray-400">100 тыс ₽</span>
                  <span className="text-[10px] sm:text-xs text-gray-400">35 млн ₽</span>
                </div>
                <button
                  onClick={handleGuess}
                  className="w-full mt-3 py-3.5 bg-[#26CD94] hover:bg-[#20b884] active:bg-[#1aa374] text-white font-bold rounded-xl transition-all active:scale-[0.97] text-sm sm:text-base shadow-md shadow-[#26CD94]/20"
                >
                  Оценить 💰
                </button>
              </>
            ) : (
              <div className="bg-gradient-to-br from-gray-50 to-green-50/30 rounded-xl p-3 sm:p-4 border border-gray-100">
                <div className="flex justify-between mb-3">
                  <div className="text-center flex-1">
                    <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5">Ваша цена</div>
                    <div className="text-sm sm:text-base font-bold text-gray-800 tabular-nums">{formatPrice(guess)}</div>
                  </div>
                  <div className="w-px bg-gray-200 mx-2" />
                  <div className="text-center flex-1">
                    <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5">Реальная цена</div>
                    <div className="text-sm sm:text-base font-bold text-[#26CD94] tabular-nums">{formatPrice(currentDacha.price)}</div>
                  </div>
                </div>
                <div className="text-center mb-2">
                  <div className={`inline-block text-xs sm:text-sm font-semibold px-3 py-1 rounded-full ${
                    lastDiff > 0 
                      ? 'bg-red-50 text-red-600' 
                      : 'bg-blue-50 text-blue-600'
                  }`}>
                    {lastDiff > 0
                      ? `📈 Больше на ${formatPrice(Math.abs(lastDiff))}`
                      : `📉 Меньше на ${formatPrice(Math.abs(lastDiff))}`
                    }
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 mt-1">Отклонение: {diffPercent}%</div>
                </div>
                <div className="text-center mb-3">
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-[#26CD94]/10 text-[#26CD94]">
                    +{roundScore} очков
                  </span>
                </div>
                <button
                  onClick={handleNext}
                  className="w-full py-3.5 bg-[#26CD94] hover:bg-[#20b884] active:bg-[#1aa374] text-white font-bold rounded-xl transition-all active:scale-[0.97] text-sm sm:text-base shadow-md shadow-[#26CD94]/20"
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
