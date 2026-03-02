import {Component, Input, ViewChild} from '@angular/core';
import {Button} from "primeng/button";
import {Menu} from "primeng/menu";
import {MenuItem} from 'primeng/api';
import {Store} from '@ngrx/store';
import {AdminThemesManagerState} from '../../../admin-themes-manager/store/admin-themes-manager.state';
import {ADD_ICON, REFRESH_ICON} from '../../../../core/icon/icon.constants';
import {CreateDeckModal} from '../../../shared/admin-modal/create/deck/deck';
import {AdminDecksManagerActions} from '../../store/admin-decks-manager.actions';
import {Deck} from '../../../../core/deck/deck.model';
import {Theme} from '../../../../core/theme/theme.model';
import {Language} from '../../../../core/language/language.model';

@Component({
  selector: 'admin-decks-manager-actions',
  imports: [
    Button,
    Menu,
    CreateDeckModal
  ],
  templateUrl: './actions.html',
  styleUrl: './actions.css',
})
export class Actions {
  @ViewChild(CreateDeckModal) createDeckModal!: CreateDeckModal;

  @Input() themes!: Theme[];
  @Input() languages!: Language[];

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
              this.createDeckModal.show(this.themes, this.languages);
            }
          },
          { separator: true },
          {
            label: 'Refresh',
            icon: REFRESH_ICON,
            command:()=> {
              this.store.dispatch(AdminDecksManagerActions.loadDecks());
              this.store.dispatch(AdminDecksManagerActions.loadThemes());
              this.store.dispatch(AdminDecksManagerActions.loadLanguages());
            }
          },
        ]
      }
    ];
  }

  protected confirmAddDeck(deck: Deck){
    this.store.dispatch(AdminDecksManagerActions.addDeck({deck: deck}));
  }
}
