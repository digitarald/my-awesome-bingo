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

## Common Tasks
- **Add questions**: Edit [questions.ts](../src/data/questions.ts) array
- **Fix logic**: Tests first in [bingoLogic.test.ts](../src/utils/bingoLogic.test.ts), pure functions only
- **Deploy**: Auto on push to `main` via GitHub Pages
