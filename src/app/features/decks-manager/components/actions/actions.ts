import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {Store} from '@ngrx/store';
import {AdminUsersManagerState} from '../../../admin-users-manager/store/admin-users-manager.state';
import {AdminUsersManagerActions} from '../../../admin-users-manager/store/admin-users-manager.actions';

@Component({
  selector: 'decks-manager-actions',
  imports: [
    Button,
    Menu
  ],
  templateUrl: './actions.html',
  styleUrl: './actions.css',
})
export class Actions implements OnInit {
  protected items: MenuItem[] = [];

  constructor(
    public store: Store<AdminUsersManagerState>,
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-plus',
            command:()=> {
            }
          },
          { separator: true },
          {
            label: 'Refresh',
            icon: 'pi pi-refresh',
            command:()=> {
              this.store.dispatch(AdminUsersManagerActions.loadUsers())
            }
          },
        ]
      }
    ];
  }
}
