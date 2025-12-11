interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="text-center max-w-sm">
        <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>☕ Soc Ops</h1>
        <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>Social Bingo</p>
        
        <div className="rounded-xl p-8 shadow-lg mb-8" style={{ 
          backgroundColor: 'var(--color-surface)', 
          borderWidth: '2px',
          borderColor: 'var(--color-border)',
          boxShadow: '0 4px 6px rgba(107, 66, 38, 0.08), 0 1px 3px rgba(107, 66, 38, 0.1)'
        }}>
          <h2 className="font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>How to play</h2>
          <ul className="text-left text-sm space-y-2" style={{ color: 'var(--color-text-muted)' }}>
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
          style={{ backgroundColor: 'var(--color-accent)' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent-light)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
