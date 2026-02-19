import {Component, Input, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {Button} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {User} from '../../../../core/user/user.model';
import {Store} from '@ngrx/store';
import {AdminUsersManagerPage} from '../../page/admin-users-manager';
import {Card} from 'primeng/card';
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'admin-users-manager-table',
  imports: [
    TableModule,
    Button,
    FormsModule,
    AsyncPipe,
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

  constructor(
    private store: Store<AdminUsersManagerPage>,
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command:()=> {
        }
      },
      { separator: true },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command:()=> {
        }
      },
    ];
  }

  protected addUser() {

  }
}
