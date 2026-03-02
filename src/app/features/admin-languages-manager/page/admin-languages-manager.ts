import {Component, OnInit} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {Toast} from "primeng/toast";
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AdminThemesManagerState} from '../../admin-themes-manager/store/admin-themes-manager.state';
import {Language} from '../../../core/language/language.model';
import {AdminLanguagesManagerActions} from '../store/admin-languages-manager.actions';
import {AdminLanguagesManagerSelectors} from '../store/admin-languages-manager.selectors';
import {Actions} from '../components/actions/actions';
import {Table} from '../components/table/table';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-admin-languages-manager',
  imports: [
    Actions,
    AsyncPipe,
    Table,
    Toast,
    Actions,
    Table,
    Button
  ],
  templateUrl: './admin-languages-manager.html',
  styleUrl: './admin-languages-manager.css',
})
export class AdminLanguagesManagerPage implements OnInit {
  protected languages$: Observable<Language[]> = new Observable<Language[]>();
  protected loading$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private store: Store<AdminThemesManagerState>
  ) {}

  ngOnInit() {
    this.languages$ = this.store.select(AdminLanguagesManagerSelectors.languages);
    this.loading$ = this.store.select(AdminLanguagesManagerSelectors.loading);

    this.store.dispatch(AdminLanguagesManagerActions.loadLanguages());
  }
}
