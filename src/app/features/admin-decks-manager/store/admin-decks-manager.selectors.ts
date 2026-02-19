import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AdminDecksManagerState} from './admin-decks-manager.state';

export const selectAdminDecksManagerState = createFeatureSelector<AdminDecksManagerState>('adminDecksManager');

export const AdminDecksManagerSelectors = {
  decks: createSelector(
    selectAdminDecksManagerState,
    state => state.decks
  ),

  loading: createSelector(
    selectAdminDecksManagerState,
    state => state.loading
  ),
};
