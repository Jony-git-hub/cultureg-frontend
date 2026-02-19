import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {Menu} from 'primeng/menu';
import {MenuItem, MenuItemCommandEvent} from 'primeng/api';
import {Store} from '@ngrx/store';
import {AdminUsersManagerState} from '../../store/admin-users-manager.state';
import {AdminUsersManagerActions} from '../../store/admin-users-manager.actions';

@Component({
  selector: 'admin-users-manager-actions',
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
