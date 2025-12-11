import { useState } from 'react';
import type { AppMode } from './types';
import { useBingoGame } from './hooks/useBingoGame';
import { useCardDeck } from './hooks/useCardDeck';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { CardDeckScreen } from './components/CardDeckScreen';
import { BingoModal } from './components/BingoModal';

function App() {
  const [appMode, setAppMode] = useState<AppMode | null>(null);

  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  const {
    cardState,
    currentCard,
    cardsRemaining,
    totalCards,
    revealCard,
    nextCard,
    resetDeck,
  } = useCardDeck();

  const handleStartBingo = () => {
    setAppMode('bingo');
    startGame();
  };

  const handleStartCardDeck = () => {
    setAppMode('cardDeck');
  };

  const handleResetToStart = () => {
    setAppMode(null);
    resetGame();
    resetDeck();
  };

  // Start screen
  if (appMode === null) {
    return <StartScreen onStart={handleStartBingo} onStartCardDeck={handleStartCardDeck} />;
  }

  // Bingo mode
  if (appMode === 'bingo') {
    return (
      <>
        <GameScreen
          board={board}
          winningSquareIds={winningSquareIds}
          hasBingo={gameState === 'bingo'}
          onSquareClick={handleSquareClick}
          onReset={handleResetToStart}
        />
        {showBingoModal && (
          <BingoModal onDismiss={dismissModal} />
        )}
      </>
    );
  }

  // Card Deck mode
  return (
    <CardDeckScreen
      cardState={cardState}
      currentCard={currentCard}
      cardsRemaining={cardsRemaining}
      totalCards={totalCards}
      onReveal={revealCard}
      onNext={nextCard}
      onReset={handleResetToStart}
    />
  );
}

export default App;
