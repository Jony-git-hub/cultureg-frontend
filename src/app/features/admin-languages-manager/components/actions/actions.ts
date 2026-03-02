import {Component, OnInit, ViewChild} from '@angular/core';
import {Button} from "primeng/button";
import {Menu} from "primeng/menu";
import {MenuItem} from 'primeng/api';
import {Store} from '@ngrx/store';
import {ADD_ICON, REFRESH_ICON} from '../../../../core/icon/icon.constants';
import {CreateLanguageModal} from '../../../shared/admin-modal/create/language/language';
import {AdminLanguagesManagerActions} from '../../store/admin-languages-manager.actions';
import {Language} from '../../../../core/language/language.model';
import {AdminLanguagesManagerState} from '../../store/admin-languages-manager.state';

@Component({
  selector: 'admin-languages-manager-actions',
  imports: [
    Button,
    Menu,
    CreateLanguageModal
  ],
  templateUrl: './actions.html',
  styleUrl: './actions.css',
})
export class Actions implements OnInit {
  @ViewChild(CreateLanguageModal) createLanguageModal!: CreateLanguageModal;

  protected items: MenuItem[] = [];

  constructor(
    private store: Store<AdminLanguagesManagerState>,
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
              this.createLanguageModal.show();
            }
          },
          { separator: true },
          {
            label: 'Refresh',
            icon: REFRESH_ICON,
            command:()=> {
              this.store.dispatch(AdminLanguagesManagerActions.loadLanguages());
            }
          },
        ]
      }
    ];
  }

  protected confirmAddLanguage(language: Language){
    this.store.dispatch(AdminLanguagesManagerActions.addLanguage({language: language}));
  }
}
