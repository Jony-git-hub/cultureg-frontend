import {adminUsersManagerReducer} from './features/admin-users-manager/store/admin-users-manager.reducer';
import {AdminUsersManagerEffects} from './features/admin-users-manager/store/admin-users-manager.effects';
import {decksManagerReducer} from './features/decks-manager/store/decks-manager.reducer';
import {DecksManagerEffects} from './features/decks-manager/store/decks-manager.effects';
import {adminDecksManagerReducer} from './features/admin-decks-manager/store/admin-decks-manager.reducer';
import {AdminDecksManagerEffects} from './features/admin-decks-manager/store/admin-decks-manager.effects';
import {adminThemesManagerReducer} from './features/admin-themes-manager/store/admin-themes-manager.reducer';
import {AdminThemesManagerEffects} from './features/admin-themes-manager/store/admin-themes-manager.effects';
import {AdminLanguagesManagerEffects} from './features/admin-languages-manager/store/admin-languages-manager.effects';
import {adminLanguagesManagerReducer} from './features/admin-languages-manager/store/admin-languages-manager.reducer';

export const rootReducers = {
  decksManager: decksManagerReducer,


  adminUsersManager: adminUsersManagerReducer,
  adminLanguagesManager: adminLanguagesManagerReducer,
  adminThemesManager: adminThemesManagerReducer,
  adminDecksManager: adminDecksManagerReducer
};

export const rootEffects = [
  DecksManagerEffects,


  AdminUsersManagerEffects,
  AdminLanguagesManagerEffects,
  AdminThemesManagerEffects,
  AdminDecksManagerEffects
];
