import {Component, OnInit} from '@angular/core';
import {Toast} from 'primeng/toast';
import {Actions} from '../components/actions/actions';
import {Grid} from '../components/grid/grid';
import {Observable} from 'rxjs';
import {Deck} from '../../../core/deck/deck.model';
import {DeckApi} from '../../../core/deck/deck.api';
import {select, Store} from '@ngrx/store';
import {DecksManagerState} from '../store/decks-manager.state';
import {DecksManagerSelectors} from '../store/decks-manager.selectors';
import {DecksManagerActions} from '../store/decks-manager.actions';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-decks-manager',
  imports: [
    Toast,
    Actions,
    Grid,
    AsyncPipe
  ],
  templateUrl: './decks-manager.html',
  styleUrl: './decks-manager.css',
})
export class DecksManager implements OnInit {
  protected decks$: Observable<Deck[]> = new Observable<Deck[]>();
  protected loading$: Observable<boolean> = new Observable<boolean>();


  constructor(
    private store: Store<DecksManagerState>
  )
  {}

  ngOnInit() {
    this.decks$ = this.store.select(DecksManagerSelectors.decks);
    this.loading$ = this.store.select(DecksManagerSelectors.loading);

    this.store.dispatch(DecksManagerActions.loadDecks());
  }

}
