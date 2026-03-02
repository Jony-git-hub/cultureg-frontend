import {createReducer, on} from '@ngrx/store';
import { AdminDecksManagerActions } from './admin-decks-manager.actions';
import {initialAdminDecksManagerState} from './admin-decks-manager.state';

export const adminDecksManagerReducer = createReducer(
  initialAdminDecksManagerState,

  //ADD
  on(AdminDecksManagerActions.addDeck, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AdminDecksManagerActions.addDeckSuccess, (state, { deck }) => ({
    ...state,
    decks: [...state.decks, deck],
    loading: false,
    error: null,
  })),
  on(AdminDecksManagerActions.addDeckFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

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

  on(AdminDecksManagerActions.loadThemes, (state) => ({
    ...state,
    themes: [],
    loading: true,
    error: null,
  })),
  on(AdminDecksManagerActions.loadThemesSuccess, (state, { themes }) => ({
    ...state,
    themes: themes,
    loading: false,
    error: null,
  })),
  on(AdminDecksManagerActions.loadThemesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(AdminDecksManagerActions.loadLanguages, (state) => ({
    ...state,
    languages: [],
    loading: true,
    error: null,
  })),
  on(AdminDecksManagerActions.loadLanguagesSuccess, (state, { languages }) => ({
    ...state,
    languages: languages,
    loading: false,
    error: null,
  })),
  on(AdminDecksManagerActions.loadLanguagesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  //UPDATE
  on(AdminDecksManagerActions.updateDeck, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AdminDecksManagerActions.updateDeckSuccess, (state, { deck }) => ({
    ...state,
    decks: [...state.decks.filter(deckTmp => deckTmp.id !== deck.id), deck],
    loading: false,
    error: null,
  })),
  on(AdminDecksManagerActions.updateDeckFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  //DELETE
  on(AdminDecksManagerActions.deleteDeck, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AdminDecksManagerActions.deleteDeckSuccess, (state, { deck }) => ({
    ...state,
    decks: state.decks.filter(deckTmp => deckTmp.id !== deck.id),
    loading: false,
    error: null,
  })),
  on(AdminDecksManagerActions.deleteDeckFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
)
