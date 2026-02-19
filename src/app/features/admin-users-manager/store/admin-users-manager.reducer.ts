import {createReducer, on} from '@ngrx/store';
import { AdminUsersManagerActions } from './admin-users-manager.actions';
import {initialAdminUsersManagerState} from './admin-users-manager.state';

export const adminUsersManagerReducer = createReducer(
  initialAdminUsersManagerState,

  //LOAD
  on(AdminUsersManagerActions.loadUsers, (state) => ({
    ...state,
    users: [],
    loading: true,
    error: null,
  })),

  on(AdminUsersManagerActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
    loading: false,
    error: null,
  })),

  on(AdminUsersManagerActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),


  //DELETE
  on(AdminUsersManagerActions.deleteUser, (state) => ({
    ...state,
    users: [],
    loading: true,
    error: null,
  })),

  on(AdminUsersManagerActions.deleteUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.filter(userTmp => userTmp.id !== user.id),
    loading: false,
    error: null,
  })),

  on(AdminUsersManagerActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
)
