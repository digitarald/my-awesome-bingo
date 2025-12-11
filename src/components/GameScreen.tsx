import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Header */}
      <header className="flex items-center justify-between p-3 border-b" style={{ 
        backgroundColor: 'var(--color-surface)', 
        borderColor: 'var(--color-border)'
      }}>
        <button
          onClick={onReset}
          className="text-sm px-3 py-1.5 rounded transition-colors"
          style={{ color: 'var(--color-text-muted)' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-marked)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          ← Back
        </button>
        <h1 className="font-bold" style={{ color: 'var(--color-text-primary)' }}>☕ Soc Ops</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-sm py-2 px-4" style={{ color: 'var(--color-text-muted)' }}>
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="text-center py-2 font-semibold text-sm" style={{ 
          backgroundColor: '#F5E6D3',
          color: 'var(--color-text-primary)'
        }}>
          ☕ BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
