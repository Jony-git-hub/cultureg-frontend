import {createAction, props} from '@ngrx/store';
import {Deck} from '../../../core/deck/deck.model';

export const DecksManagerActions = {
  loadDecks: createAction(
    '[Decks Manager] Load Decks'
  ),
  loadDecksSuccess: createAction(
    '[Decks Manager] Load Decks Success',
    props<{ decks: Deck[] }>()
  ),
  loadDecksFailure: createAction(
    '[Decks Manager] Load Decks Failure',
    props<{ error: string }>()
  ),
};
