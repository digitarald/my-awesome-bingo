import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border rounded transition-all duration-150 select-none min-h-[60px] text-xs leading-tight';

  const getStyles = () => {
    if (square.isMarked) {
      if (isWinning) {
        return {
          backgroundColor: 'var(--color-bingo)',
          borderColor: '#B8935F',
          color: 'var(--color-text-primary)',
          borderWidth: '2px'
        };
      }
      return {
        backgroundColor: 'var(--color-marked)',
        borderColor: 'var(--color-marked-border)',
        color: 'var(--color-text-primary)',
        borderWidth: '2px'
      };
    }
    return {
      backgroundColor: 'var(--color-surface)',
      borderColor: 'var(--color-border)',
      color: 'var(--color-text-secondary)'
    };
  };

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${freeSpaceClasses}`}
      style={getStyles()}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
      onMouseOver={(e) => {
        if (!square.isMarked && !square.isFreeSpace) {
          e.currentTarget.style.backgroundColor = '#F0E8DC';
        }
      }}
      onMouseOut={(e) => {
        if (!square.isMarked && !square.isFreeSpace) {
          e.currentTarget.style.backgroundColor = 'var(--color-surface)';
        }
      }}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-xs" style={{ color: 'var(--color-accent)' }}>✓</span>
      )}
    </button>
  );
}
