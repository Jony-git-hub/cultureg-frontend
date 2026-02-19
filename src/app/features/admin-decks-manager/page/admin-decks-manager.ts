import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Deck} from '../../../core/deck/deck.model';
import {Store} from '@ngrx/store';
import {AdminDecksManagerState} from '../store/admin-decks-manager.state';
import {AdminDecksManagerSelectors} from '../store/admin-decks-manager.selectors';
import {AdminDecksManagerActions} from '../store/admin-decks-manager.actions';
import {Toast} from 'primeng/toast';
import {Actions} from '../components/actions/actions';
import {Table} from '../components/table/table';

@Component({
  selector: 'app-admin-decks-manager',
  imports: [
    Toast,
    Actions,
    Table
  ],
  templateUrl: './admin-decks-manager.html',
  styleUrl: './admin-decks-manager.css',
})
export class AdminDecksManagerPage implements OnInit {
  protected decks$: Observable<Deck[]> = new Observable<Deck[]>();

  constructor(
   private store: Store<AdminDecksManagerState>
  ) {}

  ngOnInit() {
    this.decks$ = this.store.select(AdminDecksManagerSelectors.decks);

    this.store.dispatch(AdminDecksManagerActions.loadDecks());
  }

}
