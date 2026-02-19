import {createAction, props} from '@ngrx/store';
import {Deck} from '../../../core/deck/deck.model';

export const AdminDecksManagerActions = {
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
};
