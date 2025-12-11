interface StartScreenProps {
  onStart: () => void;
  onStartCardDeck: () => void;
}

export function StartScreen({ onStart, onStartCardDeck }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="text-center max-w-sm">
        <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>☕ Soc Ops</h1>
        <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>Social Mixer Games</p>
        
        {/* Bingo Mode */}
        <div className="rounded-xl p-6 shadow-lg mb-4" style={{ 
          backgroundColor: 'var(--color-surface)', 
          borderWidth: '2px',
          borderColor: 'var(--color-border)',
          boxShadow: '0 4px 6px rgba(107, 66, 38, 0.08), 0 1px 3px rgba(107, 66, 38, 0.1)'
        }}>
          <h2 className="font-semibold mb-2 text-lg" style={{ color: 'var(--color-text-primary)' }}>🎯 Bingo</h2>
          <p className="text-sm mb-3" style={{ color: 'var(--color-text-muted)' }}>
            Find people who match the squares. Get 5 in a row to win!
          </p>
          <button
            onClick={onStart}
            className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            style={{ backgroundColor: 'var(--color-accent)' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent-light)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
          >
            Play Bingo
          </button>
        </div>

        {/* Card Deck Mode */}
        <div className="rounded-xl p-6 shadow-lg" style={{ 
          backgroundColor: 'var(--color-surface)', 
          borderWidth: '2px',
          borderColor: 'var(--color-border)',
          boxShadow: '0 4px 6px rgba(107, 66, 38, 0.08), 0 1px 3px rgba(107, 66, 38, 0.1)'
        }}>
          <h2 className="font-semibold mb-2 text-lg" style={{ color: 'var(--color-text-primary)' }}>🎴 Card Deck</h2>
          <p className="text-sm mb-3" style={{ color: 'var(--color-text-muted)' }}>
            Tap to reveal random icebreaker questions. Perfect for quick conversations!
          </p>
          <button
            onClick={onStartCardDeck}
            className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            style={{ backgroundColor: 'var(--color-accent)' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent-light)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
          >
            Draw Cards
          </button>
        </div>
      </div>
    </div>
  );
}
