import { useState, useCallback, useMemo, useEffect } from 'react';
import type { CardState } from '../types';
import { questions } from '../data/questions';

export interface CardDeckState {
  cardState: CardState;
  currentCard: string | null;
  cardsRemaining: number;
  totalCards: number;
}

export interface CardDeckActions {
  revealCard: () => void;
  nextCard: () => void;
  resetDeck: () => void;
}

const STORAGE_KEY = 'card-deck-state';
const STORAGE_VERSION = 1;

interface StoredCardData {
  version: number;
  deck: string[];
  currentIndex: number;
}

function validateStoredData(data: unknown): data is StoredCardData {
  if (!data || typeof data !== 'object') {
    return false;
  }
  
  const obj = data as Record<string, unknown>;
  
  if (obj.version !== STORAGE_VERSION) {
    return false;
  }
  
  if (!Array.isArray(obj.deck) || obj.deck.length === 0) {
    return false;
  }
  
  if (typeof obj.currentIndex !== 'number' || obj.currentIndex < 0) {
    return false;
  }
  
  return true;
}

function shuffleDeck(): string[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function loadCardDeck(): { deck: string[]; currentIndex: number } | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return null;
    }

    const parsed = JSON.parse(saved);
    
    if (validateStoredData(parsed)) {
      return {
        deck: parsed.deck,
        currentIndex: parsed.currentIndex,
      };
    } else {
      console.warn('Invalid card deck data in localStorage, clearing...');
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (error) {
    console.warn('Failed to load card deck:', error);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  return null;
}

function saveCardDeck(deck: string[], currentIndex: number): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const data: StoredCardData = {
      version: STORAGE_VERSION,
      deck,
      currentIndex,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to save card deck:', error);
  }
}

export function useCardDeck(): CardDeckState & CardDeckActions {
  const loadedState = useMemo(() => loadCardDeck(), []);

  const [deck, setDeck] = useState<string[]>(
    () => loadedState?.deck || shuffleDeck()
  );
  const [currentIndex, setCurrentIndex] = useState<number>(
    () => loadedState?.currentIndex || 0
  );
  const [cardState, setCardState] = useState<CardState>('ready');

  useEffect(() => {
    saveCardDeck(deck, currentIndex);
  }, [deck, currentIndex]);

  const currentCard = useMemo(
    () => (cardState === 'revealed' && currentIndex < deck.length ? deck[currentIndex] : null),
    [cardState, currentIndex, deck]
  );

  const cardsRemaining = useMemo(
    () => deck.length - currentIndex,
    [deck.length, currentIndex]
  );

  const revealCard = useCallback(() => {
    if (cardState === 'ready') {
      setCardState('revealed');
    }
  }, [cardState]);

  const nextCard = useCallback(() => {
    setCardState('ready');
    setCurrentIndex((prev) => {
      const next = prev + 1;
      // If we've exhausted the deck, reshuffle
      if (next >= deck.length) {
        setDeck(shuffleDeck());
        return 0;
      }
      return next;
    });
  }, [deck.length]);

  const resetDeck = useCallback(() => {
    setDeck(shuffleDeck());
    setCurrentIndex(0);
    setCardState('ready');
  }, []);

  return {
    cardState,
    currentCard,
    cardsRemaining,
    totalCards: deck.length,
    revealCard,
    nextCard,
    resetDeck,
  };
}
