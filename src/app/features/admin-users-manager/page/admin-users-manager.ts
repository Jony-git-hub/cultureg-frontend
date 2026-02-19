import {Component, OnInit} from '@angular/core';
import {Actions} from '../components/actions/actions';
import {Table} from '../components/table/table';
import {Store} from '@ngrx/store';
import {AdminUsersManagerActions} from '../store/admin-users-manager.actions';
import {Toast} from 'primeng/toast';
import {AdminUsersManagerSelectors} from '../store/admin-users-manager.selectors';
import {Observable} from 'rxjs';
import {User} from '../../../core/user/user.model';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-admin-users-manager',
  imports: [
    Actions,
    Table,
    Toast,
    AsyncPipe
  ],
  templateUrl: './admin-users-manager.html',
  styleUrl: './admin-users-manager.css',
})
export class AdminUsersManagerPage implements OnInit {
  protected users$: Observable<User[]> = new Observable<User[]>();
  protected loading$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private store: Store<AdminUsersManagerPage>,
  ) {}

  ngOnInit() {
    this.users$ = this.store.select(AdminUsersManagerSelectors.users);
    this.loading$ = this.store.select(AdminUsersManagerSelectors.loading);

    this.store.dispatch(AdminUsersManagerActions.loadUsers());
  }
}
