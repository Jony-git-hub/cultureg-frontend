import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Deck} from '../../../core/deck/deck.model';
import {Theme} from '../../../core/theme/theme.model';
import {Store} from '@ngrx/store';
import {AdminDecksManagerState} from '../store/admin-decks-manager.state';
import {AdminDecksManagerSelectors} from '../store/admin-decks-manager.selectors';
import {AdminDecksManagerActions} from '../store/admin-decks-manager.actions';
import {Toast} from 'primeng/toast';
import {Actions} from '../components/actions/actions';
import {Table} from '../components/table/table';
import {AsyncPipe} from '@angular/common';
import {Language} from '../../../core/language/language.model';

@Component({
  selector: 'app-admin-decks-manager',
  imports: [
    Toast,
    Actions,
    Table,
    AsyncPipe
  ],
  templateUrl: './admin-decks-manager.html',
  styleUrl: './admin-decks-manager.css',
})
export class AdminDecksManagerPage implements OnInit {
  protected decks$: Observable<Deck[]> = new Observable<Deck[]>();
  protected themes$: Observable<Theme[]> = new Observable<Theme[]>();
  protected languages$: Observable<Language[]> = new Observable<Language[]>();
  protected loading$: Observable<boolean> = new Observable<boolean>();

  constructor(
   private store: Store<AdminDecksManagerState>
  ) {}

  ngOnInit() {
    this.decks$ = this.store.select(AdminDecksManagerSelectors.decks);
    this.themes$ = this.store.select(AdminDecksManagerSelectors.themes);
    this.languages$ = this.store.select(AdminDecksManagerSelectors.languages);
    this.loading$ = this.store.select(AdminDecksManagerSelectors.loading);

    this.store.dispatch(AdminDecksManagerActions.loadDecks());
    this.store.dispatch(AdminDecksManagerActions.loadThemes());
    this.store.dispatch(AdminDecksManagerActions.loadLanguages());
  }
}
