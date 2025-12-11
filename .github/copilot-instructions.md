# Copilot Instructions for Soc Ops (Bingo)

React + TypeScript social mixer Bingo game. Mark squares to find 5-in-a-row with people at events. Deploys to GitHub Pages.

## Development Checklist
Before committing changes, verify:
- [ ] `npm run lint` passes (ESLint with TS + React hooks)
- [ ] `npm run build` succeeds (TypeScript + Vite)
- [ ] `npm run test` passes (Vitest unit tests)

## Architecture
- **[useBingoGame](../src/hooks/useBingoGame.ts)** - single source of truth for game state (start → playing → bingo)
- **[bingoLogic.ts](../src/utils/bingoLogic.ts)** - pure functions: `generateBoard()`, `checkBingo()`, `toggleSquare()`
- **localStorage** - versioned persistence with validation, SSR guards (`typeof window`)

**State Pattern**: Board always immutable (fresh arrays), `queueMicrotask()` coordinates setState, never mutate components

## Key Types ([src/types/index.ts](../src/types/index.ts))
- `BingoSquareData` - {id, text, isMarked, isFreeSpace}
- `BingoLine` - {type: 'row'|'column'|'diagonal', index, squares[]}
- `GameState` - 'start' | 'playing' | 'bingo'

## Board Rules
- 5×5 grid, center (index 12) = FREE_SPACE (auto-marked)
- 24 questions from [src/data/questions.ts](../src/data/questions.ts), shuffled via Fisher-Yates
- Winning: 5 in row/column/diagonal (checked after each toggle)

## Testing ([bingoLogic.test.ts](../src/utils/bingoLogic.test.ts))
- Exhaustive: board generation, immutability, all 5 line types, edge cases
- Mock `Math.random` for deterministic randomization tests
- Use Vitest + `@testing-library/react`

## Styling
- **Tailwind v4** - `@theme` directive in CSS (no config file)
- Mobile-first: `flex`, `min-h-full`, `active:bg-gray-100`
- Native opacity: `bg-black/50`, container queries: `@container`, `@md:text-lg`

## Design System: Cozy Coffee Shop Theme

### Color Palette ([index.css](../src/index.css))
Use CSS custom properties defined in `@theme`:

| Variable | Color | Usage |
|----------|-------|-------|
| `--color-accent` | `#6B4226` | Primary buttons, espresso brown |
| `--color-accent-light` | `#8B6F47` | Button hover, coffee brown |
| `--color-marked` | `#F4E8D8` | Marked squares, cream/cappuccino foam |
| `--color-marked-border` | `#8B6F47` | Marked square borders |
| `--color-bingo` | `#D4A574` | Winning squares, caramel |
| `--color-bg` | `#FAF7F2` | App background, warm parchment |
| `--color-surface` | `#FFF8F0` | Cards/surfaces, cream white |
| `--color-border` | `#E0D5C7` | Borders, latte tone |
| `--color-text-primary` | `#3E2723` | Headings, dark espresso |
| `--color-text-secondary` | `#6B4226` | Body text, medium coffee |
| `--color-text-muted` | `#8D7B68` | Subtle text, mocha |

### Typography
- **Font family**: Georgia serif for warmth (fallback to system fonts)
- **Weights**: 400 (regular), 600 (semibold), 700 (bold)
- **Icons**: ☕ coffee cup emoji for branding

### Component Patterns
- **Shadows**: Warm brown undertones `rgba(107, 66, 38, 0.08)`
- **Borders**: 2px for emphasis (marked squares), 1px for subtle dividers
- **Rounded**: `rounded-lg` (8px) for buttons/cards, `rounded-xl` (12px) for modals
- **Hover states**: Lighten background to `#F0E8DC` (warm cream)
- **Active states**: Use `var(--color-accent-light)` for buttons

### Design Rules
- Always use CSS custom properties via inline styles (`style={{ backgroundColor: 'var(--color-accent)' }}`)
- Maintain warm color harmony - avoid pure grays, blues, or greens
- All interactive elements need coffee-themed hover states
- Keep serif font for headings, maintain readability at small sizes

## Common Tasks
- **Add questions**: Edit [questions.ts](../src/data/questions.ts) array
- **Fix logic**: Tests first in [bingoLogic.test.ts](../src/utils/bingoLogic.test.ts), pure functions only
- **Deploy**: Auto on push to `main` via GitHub Pages
