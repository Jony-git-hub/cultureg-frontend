import {createAction, props} from '@ngrx/store';
import {User} from '../../../core/user/user.model';

export const AdminUsersManagerActions = {
  loadUsers: createAction(
    '[Admin Users Manager] Load Users'
  ),
  loadUsersSuccess: createAction(
    '[Admin Users Manager] Load Users Success',
    props<{ users: User[] }>()
  ),
  loadUsersFailure: createAction(
    '[Admin Users Manager] Load Users Failure',
    props<{ error: string }>()
  ),

  deleteUser: createAction(
    '[Admin Users Manager] Delete User',
    props<{ id: number }>()
  ),
  deleteUserSuccess: createAction(
    '[Admin Users Manager] Delete User Success',
    props<{ user: User }>()
  ),
  deleteUserFailure: createAction(
    '[Admin Users Manager] Delete User Failure',
    props<{ error: string }>()
  ),
};
