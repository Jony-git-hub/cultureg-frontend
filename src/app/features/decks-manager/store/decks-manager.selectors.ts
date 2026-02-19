import {createFeatureSelector, createSelector} from '@ngrx/store';
import {DecksManagerState} from './decks-manager.state';

export const selectDecksManagerState = createFeatureSelector<DecksManagerState>('decksManager');

export const DecksManagerSelectors = {
  decks: createSelector(
    selectDecksManagerState,
    state => state.decks
  ),

  loading: createSelector(
    selectDecksManagerState,
    state => state.loading
  ),
};

