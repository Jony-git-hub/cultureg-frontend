import { Routes } from '@angular/router';
import {HomePage} from './features/home/page/home';
import {LoginPage} from './features/login/page/login';
import {RegisterPage} from './features/register/page/register';
import {AdminUsersManagerPage} from './features/admin-users-manager/page/admin-users-manager';
import {DecksManager} from './features/decks-manager/page/decks-manager';

export const routes: Routes = [
  { path: '', component: HomePage },


  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },

  //USER
  { path: 'decks-manager', component: DecksManager },

  //ADMIN
  { path: 'admin-users-manager', component: AdminUsersManagerPage },


];
