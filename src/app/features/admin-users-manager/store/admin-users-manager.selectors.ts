import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AdminUsersManagerState} from './admin-users-manager.state';

export const selectAdminUsersManagerState = createFeatureSelector<AdminUsersManagerState>('adminUsersManager');

export const AdminUsersManagerSelectors = {
  users: createSelector(
    selectAdminUsersManagerState,
    state => state.users
  ),

  loading: createSelector(
    selectAdminUsersManagerState,
    state => state.loading
  ),
};
