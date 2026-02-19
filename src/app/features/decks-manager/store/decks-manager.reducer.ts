import {createReducer, on} from '@ngrx/store';
import { DecksManagerActions } from './decks-manager.actions';
import {initialDecksManagerState} from './decks-manager.state';


export const decksManagerReducer = createReducer(
  initialDecksManagerState,

  //LOAD
  on(DecksManagerActions.loadDecks, (state) => ({
    ...state,
    decks: [],
    loading: true,
    error: null,
  })),

  on(DecksManagerActions.loadDecksSuccess, (state, { decks }) => ({
    ...state,
    decks: decks,
    loading: false,
    error: null,
  })),

  on(DecksManagerActions.loadDecksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

)
