interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50" style={{ backgroundColor: 'rgba(62, 39, 35, 0.65)' }}>
      <div className="rounded-xl p-8 max-w-xs w-full text-center animate-[bounce_0.5s_ease-out]" style={{ 
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 20px 25px rgba(107, 66, 38, 0.15), 0 10px 10px rgba(107, 66, 38, 0.1)'
      }}>
        <div className="text-5xl mb-4">☕</div>
        <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-bingo)' }}>BINGO!</h2>
        <p className="mb-6" style={{ color: 'var(--color-text-muted)' }}>You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          style={{ backgroundColor: 'var(--color-accent)' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent-light)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
