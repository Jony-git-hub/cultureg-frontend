import {createReducer, on} from '@ngrx/store';
import { AdminDecksManagerActions } from './admin-decks-manager.actions';
import {initialAdminDecksManagerState} from './admin-decks-manager.state';

export const adminDecksManagerReducer = createReducer(
  initialAdminDecksManagerState,

  //LOAD
  on(AdminDecksManagerActions.loadDecks, (state) => ({
    ...state,
    decks: [],
    loading: true,
    error: null,
  })),

  on(AdminDecksManagerActions.loadDecksSuccess, (state, { decks }) => ({
    ...state,
    decks: decks,
    loading: false,
    error: null,
  })),

  on(AdminDecksManagerActions.loadDecksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
)
