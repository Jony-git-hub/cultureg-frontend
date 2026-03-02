import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Button} from 'primeng/button';
import {Card} from 'primeng/card';
import {MenuItem, PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {Deck} from '../../../../core/deck/deck.model';
import {ADD_ICON, DELETE_ICON, SETTINGS_ICON, UPDATE_ICON} from '../../../../core/icon/icon.constants';
import {Theme} from '../../../../core/theme/theme.model';
import {CreateDeckModal} from '../../../shared/admin-modal/create/deck/deck';
import {UpdateDeckModal} from '../../../shared/admin-modal/update/deck/deck';
import {DeleteDeckModal} from '../../../shared/admin-modal/delete/deck/deck';
import {Store} from '@ngrx/store';
import {AdminThemesManagerState} from '../../../admin-themes-manager/store/admin-themes-manager.state';
import {AdminDecksManagerActions} from '../../store/admin-decks-manager.actions';
import {Language} from '../../../../core/language/language.model';

@Component({
  selector: 'admin-decks-manager-table',
  imports: [
    Button,
    Card,
    PrimeTemplate,
    TableModule,
    CreateDeckModal,
    UpdateDeckModal,
    DeleteDeckModal
  ],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit {
  @ViewChild(CreateDeckModal) createDeckModal!: CreateDeckModal;
  @ViewChild(UpdateDeckModal) updateDeckModal!: UpdateDeckModal;
  @ViewChild(DeleteDeckModal) deleteDeckModal!: DeleteDeckModal;

  @Input() decks: Deck[] = [];
  @Input() themes: Theme[] = [];
  @Input() languages!: Language[];
  @Input() loading: boolean = false;

  protected items: MenuItem[] = [];

  constructor(
    public store: Store<AdminThemesManagerState>,
  ) {}

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

  protected addDeck() {
    this.createDeckModal.show(this.themes, this.languages);
  }

  protected updateDeck(deck: Deck): void {
    this.updateDeckModal.show(deck, this.themes, this.languages);
  }

  protected deleteDeck(deck: Deck) {
    this.deleteDeckModal.show(deck);
  }

  protected confirmAddDeck(deck: Deck){
    this.store.dispatch(AdminDecksManagerActions.addDeck({deck: deck}));
  }

  protected confirmUpdateDeck(deck: Deck){
    this.store.dispatch(AdminDecksManagerActions.updateDeck({deck: deck}));
  }

  protected confirmDeleteDeck(deck: Deck){
    this.store.dispatch(AdminDecksManagerActions.deleteDeck({deck: deck}));
  }

  protected readonly ADD_ICON = ADD_ICON;
  protected readonly UPDATE_ICON = UPDATE_ICON;
  protected readonly DELETE_ICON = DELETE_ICON;
}
