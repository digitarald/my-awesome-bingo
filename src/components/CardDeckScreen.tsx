import { useEffect } from 'react';
import type { CardState } from '../types';

interface CardDeckScreenProps {
  cardState: CardState;
  currentCard: string | null;
  cardsRemaining: number;
  totalCards: number;
  onReveal: () => void;
  onNext: () => void;
  onReset: () => void;
}

export function CardDeckScreen({
  cardState,
  currentCard,
  cardsRemaining,
  totalCards,
  onReveal,
  onNext,
  onReset,
}: CardDeckScreenProps) {
  // Auto-advance after revealing
  useEffect(() => {
    if (cardState === 'revealed') {
      const timer = setTimeout(() => {
        onNext();
      }, 3000); // 3 seconds to read the question
      return () => clearTimeout(timer);
    }
  }, [cardState, onNext]);

  const handleCardClick = () => {
    if (cardState === 'ready') {
      onReveal();
    } else {
      // Allow early tap to advance
      onNext();
    }
  };

  return (
    <div className="flex flex-col min-h-full p-6" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
          ☕ Card Deck
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>
          {cardsRemaining} of {totalCards} cards remaining
        </p>
      </div>

      {/* Card Container */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div 
          className="w-full max-w-md cursor-pointer"
          style={{ perspective: '1000px' }}
          onClick={handleCardClick}
        >
          <div
            className="relative w-full transition-transform duration-500"
            style={{
              transformStyle: 'preserve-3d',
              transform: cardState === 'revealed' ? 'rotateY(180deg)' : 'rotateY(0deg)',
              aspectRatio: '3/4',
            }}
          >
            {/* Card Back */}
            <div
              className="absolute inset-0 rounded-2xl flex items-center justify-center p-8 text-center"
              style={{
                backfaceVisibility: 'hidden',
                backgroundColor: 'var(--color-accent)',
                boxShadow: '0 10px 30px rgba(107, 66, 38, 0.3), 0 4px 8px rgba(107, 66, 38, 0.2)',
              }}
            >
              <div>
                <div className="text-6xl mb-4">☕</div>
                <p className="text-xl font-semibold text-white leading-relaxed">
                  Tap to reveal your question
                </p>
              </div>
            </div>

            {/* Card Front */}
            <div
              className="absolute inset-0 rounded-2xl flex items-center justify-center p-8 text-center"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                backgroundColor: 'var(--color-surface)',
                borderWidth: '3px',
                borderColor: 'var(--color-accent)',
                boxShadow: '0 10px 30px rgba(107, 66, 38, 0.3), 0 4px 8px rgba(107, 66, 38, 0.2)',
              }}
            >
              {currentCard && (
                <div>
                  <div className="text-3xl mb-4">💬</div>
                  <p className="text-2xl font-semibold leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                    {currentCard}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="text-center space-y-3 mt-8">
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          {cardState === 'revealed' ? 'Tap card or wait to continue' : 'Tap the card to reveal'}
        </p>
        <button
          onClick={onReset}
          className="text-sm font-semibold py-2 px-4 rounded-lg transition-colors"
          style={{ 
            color: 'var(--color-accent)',
            backgroundColor: 'transparent',
            borderWidth: '2px',
            borderColor: 'var(--color-accent)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-accent)';
            e.currentTarget.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--color-accent)';
          }}
        >
          Reset Deck
        </button>
      </div>
    </div>
  );
}
