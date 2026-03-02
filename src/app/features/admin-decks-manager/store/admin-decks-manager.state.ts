import {Deck} from '../../../core/deck/deck.model';
import {Theme} from '../../../core/theme/theme.model';
import {Language} from '../../../core/language/language.model';

export interface AdminDecksManagerState {
  decks: Deck[];
  themes: Theme[];
  languages: Language[];
  loading: boolean;
  error: any;
}

export const initialAdminDecksManagerState: AdminDecksManagerState = {
  decks: [],
  languages: [],
  themes: [],
  loading: false,
  error: null,
}

