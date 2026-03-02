import {Component, Input, OnInit} from '@angular/core';
import {Breadcrumb} from 'primeng/breadcrumb';
import {MenuItem} from 'primeng/api';
import {AdminDecksManagerActions} from '../../../admin-decks-manager/store/admin-decks-manager.actions';

@Component({
  selector: 'play-bread-crumb',
  imports: [
    Breadcrumb
  ],
  templateUrl: './bread-crumb.html',
  styleUrl: './bread-crumb.css',
})
export class BreadCrumb implements OnInit {
  @Input() mode!: string;

  protected items: MenuItem[] | undefined;

  ngOnInit() {
    this.loadItems()
  }

  protected loadItems(): void {
    switch (this.mode) {
      case 'none':
        this.items = [
          {
            label: 'Play',
            command:()=> {

            }
          },
        ];
        break;
      case 'normal':
        this.items = [
          {
            label: 'Play',
            command:()=> {

            }
          },
          {
            label: 'Normal',
            command:()=> {

            }
          },
        ];
        break;
      case 'ranked':
        this.items = [
          {
            label: 'Play',
            command:()=> {

            }
          },
          {
            label: 'Ranked',
            command:()=> {

            }
          },
        ];
        break;
    }
  }
}
