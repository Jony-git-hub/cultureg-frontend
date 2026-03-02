import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Theme} from '../../../core/theme/theme.model';
import {Store} from '@ngrx/store';
import {AdminThemesManagerState} from '../store/admin-themes-manager.state';
import {AdminThemesManagerSelectors} from '../store/admin-themes-manager.selectors';
import {AdminThemesManagerActions} from '../store/admin-themes-manager.actions';
import {Toast} from 'primeng/toast';
import {Actions} from '../components/actions/actions';
import {Table} from '../components/table/table';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-admin-themes-manager',
  imports: [
    Toast,
    Actions,
    Table,
    AsyncPipe
  ],
  templateUrl: './admin-themes-manager.html',
  styleUrl: './admin-themes-manager.css',
})
export class AdminThemesManagerPage implements OnInit {
  protected themes$: Observable<Theme[]> = new Observable<Theme[]>();
  protected loading$: Observable<boolean> = new Observable<boolean>();

  constructor(
   private store: Store<AdminThemesManagerState>
  ) {}

  ngOnInit() {
    this.themes$ = this.store.select(AdminThemesManagerSelectors.themes);
    this.loading$ = this.store.select(AdminThemesManagerSelectors.loading);

    this.store.dispatch(AdminThemesManagerActions.loadThemes());
  }
}
