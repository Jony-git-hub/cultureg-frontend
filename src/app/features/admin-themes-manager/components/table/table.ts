import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Button} from 'primeng/button';
import {Card} from 'primeng/card';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {Theme} from '../../../../core/theme/theme.model';
import {Store} from '@ngrx/store';
import {AdminThemesManagerState} from '../../store/admin-themes-manager.state';
import {ADD_ICON, DELETE_ICON, UPDATE_ICON} from '../../../../core/icon/icon.constants';
import {CreateThemeModal} from '../../../shared/admin-modal/create/theme/theme';
import {AdminThemesManagerActions} from '../../store/admin-themes-manager.actions';
import {UpdateThemeModal} from '../../../shared/admin-modal/update/theme/theme';
import {DeleteThemeModal} from '../../../shared/admin-modal/delete/theme/theme';

@Component({
  selector: 'admin-themes-manager-table',
  imports: [
    Button,
    Card,
    PrimeTemplate,
    TableModule,
    CreateThemeModal,
    UpdateThemeModal,
    DeleteThemeModal,

  ],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  @ViewChild(CreateThemeModal) createThemeModal!: CreateThemeModal;
  @ViewChild(UpdateThemeModal) updateThemeModal!: UpdateThemeModal;
  @ViewChild(DeleteThemeModal) deleteThemeModal!: DeleteThemeModal;

  @Input() themes: Theme[] = [];
  @Input() loading: boolean = false;

  constructor(
    public store: Store<AdminThemesManagerState>,
  ) {}

  protected addTheme() {
    this.createThemeModal.show();
  }

  protected updateTheme(theme: Theme) {
    this.updateThemeModal.show(theme);
  }

  protected deleteTheme(theme: Theme) {
    this.deleteThemeModal.show(theme);
  }

  protected confirmAddTheme(theme: Theme){
    this.store.dispatch(AdminThemesManagerActions.addTheme({theme: theme}));
  }

  protected confirmUpdateTheme(theme: Theme){
    this.store.dispatch(AdminThemesManagerActions.updateTheme({theme: theme}));
  }

  protected confirmDeleteTheme(theme: Theme){
    this.store.dispatch(AdminThemesManagerActions.deleteTheme({theme: theme}));
  }

  protected readonly ADD_ICON = ADD_ICON;
  protected readonly UPDATE_ICON = UPDATE_ICON;
  protected readonly DELETE_ICON = DELETE_ICON;
}
