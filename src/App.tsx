import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { GamePage } from './components/GamePage';
import { ResultPage } from './components/ResultPage';
import { Footer } from './components/Footer';

type Screen = 'home' | 'game' | 'result';

export interface GameResult {
  totalScore: number;
  rounds: number;
  avgScore: number;
  overpaid: number;
}

function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const handleGameFinish = (result: GameResult) => {
    setGameResult(result);
    setScreen('result');
  };

  const handleRestart = () => {
    setGameResult(null);
    setScreen('home');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 flex flex-col">
        {screen === 'home' && (
          <HomePage onStart={() => setScreen('game')} />
        )}
        {screen === 'game' && (
          <GamePage onFinish={handleGameFinish} />
        )}
        {screen === 'result' && gameResult && (
          <ResultPage result={gameResult} onRestart={handleRestart} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
