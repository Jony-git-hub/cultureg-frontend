import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AdminLanguagesManagerState} from './admin-languages-manager.state';

export const selectAdminLanguagesManagerState = createFeatureSelector<AdminLanguagesManagerState>('adminLanguagesManager');

export const AdminLanguagesManagerSelectors = {
  languages: createSelector(
    selectAdminLanguagesManagerState,
    state => state.languages,
  ),

  loading: createSelector(
    selectAdminLanguagesManagerState,
    state => state.loading
  ),
};
