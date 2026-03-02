import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AdminThemesManagerState} from './admin-themes-manager.state';

export const selectAdminThemesManagerState = createFeatureSelector<AdminThemesManagerState>('adminThemesManager');

export const AdminThemesManagerSelectors = {
  themes: createSelector(
    selectAdminThemesManagerState,
    state => state.themes
  ),

  loading: createSelector(
    selectAdminThemesManagerState,
    state => state.loading
  ),
};
