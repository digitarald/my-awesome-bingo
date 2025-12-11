interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-8" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="text-center max-w-sm">
        {/* Animated title - fades in first */}
        <div style={{
          animation: 'fadeInUp 600ms ease-out 300ms both'
        }}>
          <h1 className="text-5xl font-bold mb-3" style={{ 
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.02em',
            lineHeight: '1.2'
          }}>
            ☕ Soc Ops
          </h1>
          <p className="text-xl mb-16" style={{ 
            color: 'var(--color-bingo)',
            fontWeight: 500,
            letterSpacing: '0.05em'
          }}>
            Social Bingo
          </p>
        </div>
        
        {/* Animated content card - fades in second */}
        <div style={{
          animation: 'fadeInUp 600ms ease-out 600ms both'
        }}>
          <div className="rounded-xl p-10 mb-16" style={{ 
            background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-alt) 100%)',
            borderWidth: '1px',
            borderColor: 'var(--color-border-light)',
            boxShadow: '0 8px 16px rgba(107, 66, 38, 0.06)'
          }}>
            <h2 className="text-xl font-semibold mb-6" style={{ 
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.01em'
            }}>
              How to play
            </h2>
            
            <div className="space-y-5 text-left">
              <div className="flex gap-4">
                <span style={{ 
                  color: 'var(--color-bingo)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  flexShrink: 0
                }}>1</span>
                <p className="text-base" style={{ 
                  color: 'var(--color-text-muted)',
                  lineHeight: '1.6'
                }}>
                  Find people who match the questions
                </p>
              </div>
              
              <div className="flex gap-4">
                <span style={{ 
                  color: 'var(--color-bingo)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  flexShrink: 0
                }}>2</span>
                <p className="text-base" style={{ 
                  color: 'var(--color-text-muted)',
                  lineHeight: '1.6'
                }}>
                  Tap a square when you find a match
                </p>
              </div>
              
              <div className="flex gap-4">
                <span style={{ 
                  color: 'var(--color-bingo)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  flexShrink: 0
                }}>3</span>
                <p className="text-base" style={{ 
                  color: 'var(--color-text-muted)',
                  lineHeight: '1.6'
                }}>
                  Get 5 in a row to win!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated CTA - fades in last */}
        <div style={{
          animation: 'fadeInUp 600ms ease-out 900ms both'
        }}>
          <button
            onClick={onStart}
            className="w-full text-white font-medium py-4 px-8 rounded-lg text-lg"
            style={{ 
              backgroundColor: 'var(--color-accent)',
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 4px 12px rgba(107, 66, 38, 0.15)',
              letterSpacing: '0.02em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent-light)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(107, 66, 38, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(107, 66, 38, 0.15)';
            }}
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}
