import {Component, Input, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {Button} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {User} from '../../../../core/user/user.model';
import {Card} from 'primeng/card';
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {ADD_ICON, DELETE_ICON, SETTINGS_ICON, UPDATE_ICON} from '../../../../core/icon/icon.constants';

@Component({
  selector: 'admin-users-manager-table',
  imports: [
    TableModule,
    Button,
    FormsModule,
    Card,
    Menu
  ],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit {
  @Input() users: User[] = [];
  @Input() loading: boolean = false;

  protected items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Edit',
        icon: UPDATE_ICON,
        command:()=> {
        }
      },
      { separator: true },
      {
        label: 'Delete',
        icon: DELETE_ICON,
        command:()=> {
        }
      },
    ];
  }

  protected addUser() {

  }

  protected readonly SETTINGS_ICON = SETTINGS_ICON;
  protected readonly ADD_ICON = ADD_ICON;
}
