import {Component, OnInit, ViewChild} from '@angular/core';
import {Button} from 'primeng/button';
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {Store} from '@ngrx/store';
import {CreateThemeModal} from '../../../shared/admin-modal/create/theme/theme';
import {ADD_ICON, REFRESH_ICON} from '../../../../core/icon/icon.constants';
import {Theme} from '../../../../core/theme/theme.model';
import {AdminThemesManagerActions} from '../../store/admin-themes-manager.actions';
import {AdminThemesManagerState} from '../../store/admin-themes-manager.state';

@Component({
  selector: 'admin-themes-manager-actions',
  imports: [
    Button,
    Menu,
    CreateThemeModal
  ],
  templateUrl: './actions.html',
  styleUrl: './actions.css',
})
export class Actions implements OnInit {
  @ViewChild(CreateThemeModal) createThemeModal!: CreateThemeModal;

  protected items: MenuItem[] = [];

  constructor(
    private store: Store<AdminThemesManagerState>,
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
              this.createThemeModal.show();
            }
          },
          { separator: true },
          {
            label: 'Refresh',
            icon: REFRESH_ICON,
            command:()=> {
              this.store.dispatch(AdminThemesManagerActions.loadThemes());
            }
          },
        ]
      }
    ];
  }

  protected confirmAddTheme(theme: Theme){
    this.store.dispatch(AdminThemesManagerActions.addTheme({theme: theme}));
  }
}
