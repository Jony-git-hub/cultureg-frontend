import { Routes } from '@angular/router';
import {HomePage} from './features/home/page/home';
import {LoginPage} from './features/login/page/login';
import {RegisterPage} from './features/register/page/register';
import {AdminUsersManagerPage} from './features/admin-users-manager/page/admin-users-manager';
import {DecksManagerPage} from './features/decks-manager/page/decks-manager';
import {AdminDecksManagerPage} from './features/admin-decks-manager/page/admin-decks-manager';
import {AdminThemesManagerPage} from './features/admin-themes-manager/page/admin-themes-manager';
import {MarketPlacePage} from './features/market-place/page/market-place';
import {PlayPage} from './features/play/page/play';
import {
  AdminLanguagesManagerPage
} from './features/admin-languages-manager/page/admin-languages-manager';

export const routes: Routes = [
  { path: '', component: HomePage },


  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },

  //USER
  { path: 'play', component: PlayPage },
  { path: 'decks-manager', component: DecksManagerPage },
  { path: 'market-place', component: MarketPlacePage },

  //ADMIN
  { path: 'admin-users-manager', component: AdminUsersManagerPage },
  { path: 'admin-languages-manager', component: AdminLanguagesManagerPage },
  { path: 'admin-themes-manager', component: AdminThemesManagerPage },
  { path: 'admin-decks-manager', component: AdminDecksManagerPage },


];
