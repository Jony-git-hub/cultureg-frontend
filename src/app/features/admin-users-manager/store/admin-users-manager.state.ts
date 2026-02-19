import {User} from '../../../core/user/user.model';

export interface AdminUsersManagerState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialAdminUsersManagerState: AdminUsersManagerState = {
  users: [],
  loading: false,
  error: null,
}

