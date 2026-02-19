import {adminUsersManagerReducer} from './features/admin-users-manager/store/admin-users-manager.reducer';
import {AdminUsersManagerEffects} from './features/admin-users-manager/store/admin-users-manager.effects';
import {decksManagerReducer} from './features/decks-manager/store/decks-manager.reducer';
import {DecksManagerEffects} from './features/decks-manager/store/decks-manager.effects';
import {adminDecksManagerReducer} from './features/admin-decks-manager/store/admin-decks-manager.reducer';
import {AdminDecksManagerEffects} from './features/admin-decks-manager/store/admin-decks-manager.effects';

export const rootReducers = {
  decksManager: decksManagerReducer,


  adminUsersManager: adminUsersManagerReducer,
  adminDecksManager: adminDecksManagerReducer
};

export const rootEffects = [
  DecksManagerEffects,


  AdminUsersManagerEffects,
  AdminDecksManagerEffects
];
