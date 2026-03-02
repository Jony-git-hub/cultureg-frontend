import {Component, Input, ViewChild} from '@angular/core';
import {Button} from "primeng/button";
import {Card} from "primeng/card";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {Store} from '@ngrx/store';
import {ADD_ICON, DELETE_ICON, UPDATE_ICON} from '../../../../core/icon/icon.constants';
import {CreateLanguageModal} from '../../../shared/admin-modal/create/language/language';
import {UpdateLanguageModal} from '../../../shared/admin-modal/update/language/language';
import {DeleteLanguageModal} from '../../../shared/admin-modal/delete/language/language';
import {Language} from '../../../../core/language/language.model';
import {AdminLanguagesManagerState} from '../../store/admin-languages-manager.state';
import {AdminLanguagesManagerActions} from '../../store/admin-languages-manager.actions';

@Component({
  selector: 'admin-languages-manager-table',
  imports: [
    Button,
    Card,
    PrimeTemplate,
    TableModule,
    CreateLanguageModal,
    UpdateLanguageModal,
    DeleteLanguageModal
  ],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {

  @ViewChild(CreateLanguageModal) createLanguageModal!: CreateLanguageModal;
  @ViewChild(UpdateLanguageModal) updateLanguageModal!: UpdateLanguageModal;
  @ViewChild(DeleteLanguageModal) deleteLanguageModal!: DeleteLanguageModal;

  @Input() languages: Language[] = [];
  @Input() loading: boolean = false;

  constructor(
    public store: Store<AdminLanguagesManagerState>,
  ) {}

  protected addLanguage() {
    this.createLanguageModal.show();
  }

  protected updateLanguage(language: Language) {
    this.updateLanguageModal.show(language);
  }

  protected deleteLanguage(language: Language) {
    this.deleteLanguageModal.show(language);
  }

  protected confirmAddLanguage(language: Language){
    this.store.dispatch(AdminLanguagesManagerActions.addLanguage({language: language}));
  }

  protected confirmUpdateLanguage(language: Language){
    this.store.dispatch(AdminLanguagesManagerActions.updateLanguage({language: language}));
  }

  protected confirmDeleteLanguage(language: Language){
    this.store.dispatch(AdminLanguagesManagerActions.deleteLanguage({language: language}));
  }

  protected readonly ADD_ICON = ADD_ICON;
  protected readonly UPDATE_ICON = UPDATE_ICON;
  protected readonly DELETE_ICON = DELETE_ICON;
}
