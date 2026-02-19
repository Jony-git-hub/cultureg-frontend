import {Deck} from '../../../core/deck/deck.model';

export interface DecksManagerState {
  decks: Deck[];
  loading: boolean;
  error: any;
}

export const initialDecksManagerState: DecksManagerState = {
  decks: [],
  loading: false,
  error: null,
}

