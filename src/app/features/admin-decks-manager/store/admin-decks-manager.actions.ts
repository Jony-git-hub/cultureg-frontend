import {createAction, props} from '@ngrx/store';
import {Deck} from '../../../core/deck/deck.model';
import {Theme} from '../../../core/theme/theme.model';
import {Language} from '../../../core/language/language.model';

export const AdminDecksManagerActions = {
  addDeck: createAction(
    '[Admin Decks Manager] Add Deck',
  props<{ deck: Deck }>()
),
  addDeckSuccess: createAction(
    '[Admin Decks Manager] Add Deck Success',
    props<{ deck: Deck }>()
  ),
  addDeckFailure: createAction(
    '[Admin Decks Manager] Add Deck Failure',
    props<{ error: string }>()
  ),

  loadDecks: createAction(
    '[Admin Decks Manager] Load Decks'
  ),
  loadDecksSuccess: createAction(
    '[Admin Decks Manager] Load Decks Success',
    props<{ decks: Deck[] }>()
  ),
  loadDecksFailure: createAction(
    '[Admin Decks Manager] Load Decks Failure',
    props<{ error: string }>()
  ),

  loadThemes: createAction(
    '[Admin Decks Manager] Load Themes',
  ),
  loadThemesSuccess: createAction(
    '[Admin Decks Manager] Load Themes Success',
    props<{ themes: Theme[] }>()
  ),
  loadThemesFailure: createAction(
    '[Admin Decks Manager] Load Themes Failure',
    props<{ error: string }>()
  ),

  loadLanguages: createAction(
    '[Admin Decks Manager] Load Languages',
  ),
  loadLanguagesSuccess: createAction(
    '[Admin Decks Manager] Load Languages Success',
    props<{ languages: Language[] }>()
  ),
  loadLanguagesFailure: createAction(
    '[Admin Decks Manager] Load Languages Failure',
    props<{ error: string }>()
  ),

  updateDeck: createAction(
    '[Admin Decks Manager] Update Deck',
    props<{ deck: Deck }>()
  ),
  updateDeckSuccess: createAction(
    '[Admin Decks Manager] Update Deck Success',
    props<{ deck: Deck }>()
  ),
  updateDeckFailure: createAction(
    '[Admin Decks Manager] Update Deck Failure',
    props<{ error: string }>()
  ),

  deleteDeck: createAction(
    '[Admin Decks Manager] Delete Deck',
    props<{ deck: Deck }>()
  ),
  deleteDeckSuccess: createAction(
    '[Admin Decks Manager] Delete Deck Success',
    props<{ deck: Deck }>()
  ),
  deleteDeckFailure: createAction(
    '[Admin Decks Manager] Delete Deck Failure',
    props<{ error: string }>()
  ),
};
