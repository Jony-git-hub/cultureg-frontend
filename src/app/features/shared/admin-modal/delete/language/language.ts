import {Component, EventEmitter, Output} from '@angular/core';
import {CANCEL_ICON, CONFIRM_ICON} from '../../../../../core/icon/icon.constants';
import {Language} from '../../../../../core/language/language.model';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';

@Component({
  selector: 'shared-admin-modal-delete-language',
  imports: [
    Button,
    Dialog
  ],
  templateUrl: './language.html',
  styleUrl: './language.css',
})
export class DeleteLanguageModal {
  @Output() onConfirm = new EventEmitter<Language>();

  protected visible = false;
  protected language: Language | null = null;


  public show(language: Language): void {
    this.visible = true;
    this.language = language;
  }

  protected confirm() {
    if(this.language){
      this.onConfirm.emit(this.language);
    }

    this.language = null;
    this.visible = false;
  }

  protected cancel() {
    this.language = null;
    this.visible = false;
  }

  protected readonly CANCEL_ICON = CANCEL_ICON;
  protected readonly CONFIRM_ICON = CONFIRM_ICON;
}
