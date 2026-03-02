import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {Store} from '@ngrx/store';
import {AdminUsersManagerState} from '../../../admin-users-manager/store/admin-users-manager.state';
import {AdminUsersManagerActions} from '../../../admin-users-manager/store/admin-users-manager.actions';
import {ADD_ICON, REFRESH_ICON, SETTINGS_ICON} from '../../../../core/icon/icon.constants';

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
            icon: ADD_ICON,
            command:()=> {
            }
          },
          { separator: true },
          {
            label: 'Refresh',
            icon: REFRESH_ICON,
            command:()=> {
              this.store.dispatch(AdminUsersManagerActions.loadUsers())
            }
          },
        ]
      }
    ];
  }

  protected readonly SETTINGS_ICON = SETTINGS_ICON;
}
