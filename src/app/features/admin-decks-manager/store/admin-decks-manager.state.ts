import {Deck} from '../../../core/deck/deck.model';

export interface AdminDecksManagerState {
  decks: Deck[];
  loading: boolean;
  error: any;
}

export const initialAdminDecksManagerState: AdminDecksManagerState = {
  decks: [],
  loading: false,
  error: null,
}

