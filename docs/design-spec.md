# Design Specification: Card Deck Shuffle Mode

## Overview
A simplified social mixer mode where players tap to reveal random icebreaker questions from a shuffled deck. Perfect for quick conversations at events without the competitive structure of bingo.

## User Flow
1. **Start Screen** → Player chooses "Card Deck Shuffle" mode
2. **Card Screen** → Shows back of card with "Tap to reveal" prompt
3. **Reveal** → Card flips to show random question
4. **Next** → Player can tap to get another card (reshuffle when deck exhausted)

## Visual Design

### Coffee Shop Theme Extension
- **Card back**: Rich espresso brown (`--color-accent`) with subtle texture/pattern
- **Card front**: Cream surface (`--color-surface`) with coffee brown text
- **Flip animation**: 3D card flip with warm shadow
- **Typography**: Georgia serif for questions, slightly larger than bingo squares

### Layout
```
┌─────────────────────┐
│                     │
│   [App Header]      │
│                     │
│  ┌───────────────┐  │
│  │               │  │
│  │               │  │
│  │     CARD      │  │
│  │   (flippable) │  │
│  │               │  │
│  │               │  │
│  └───────────────┘  │
│                     │
│  Card 3 of 24       │
│                     │
│  [Reset Deck]       │
│                     │
└─────────────────────┘
```

### Card States
1. **Back (initial)**: "☕ Tap to reveal your question"
2. **Front (revealed)**: Question text + decorative elements
3. **Transition**: 500ms 3D flip animation
4. **Auto-advance**: After 2s, card back slides in ready for next tap

## Technical Approach

### State Management
- New hook: `useCardDeck()`
  - `deckState: 'ready' | 'revealed'`
  - `currentCard: string | null`
  - `cardsRemaining: number`
  - `revealCard()` → flip & show question
  - `nextCard()` → reset to back state
  - `resetDeck()` → reshuffle

### Components
- `CardDeckScreen.tsx` → Main container
- `FlippableCard.tsx` → Reusable card with flip animation
- Update `StartScreen.tsx` → Add mode selection buttons

### Animation
- CSS transforms for 3D flip
- `transform: rotateY(180deg)` 
- `transition: transform 500ms cubic-bezier(0.4, 0.0, 0.2, 1)`
- `backface-visibility: hidden` for clean flip

## Decisions Log

### 2025-12-11: Initial Design
- **Decision**: Keep as separate mode rather than replacing bingo
- **Rationale**: Different use cases - bingo for full event, cards for quick mixers
- **Decision**: Auto-advance after reveal
- **Rationale**: Keeps flow moving, encourages conversation before next card
- **Decision**: Show cards remaining counter
- **Rationale**: Gives sense of progress, players know when deck resets

## Next Steps
1. ✅ Create design spec
2. ⏳ Add mode selection UI
3. ⏳ Implement card deck logic
4. ⏳ Build card flip component
5. ⏳ Add animations and polish
6. ⏳ Playwright visual review
