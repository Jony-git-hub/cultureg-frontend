import {Component, EventEmitter, Output} from '@angular/core';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {Theme} from '../../../../../core/theme/theme.model';
import {CANCEL_ICON, CONFIRM_ICON} from '../../../../../core/icon/icon.constants';

@Component({
  selector: 'shared-admin-modal-delete-theme',
  imports: [
    Button,
    Dialog,
  ],
  templateUrl: './theme.html',
  styleUrl: './theme.css',
})
export class DeleteThemeModal {
  @Output() onConfirm = new EventEmitter<Theme>();

  protected visible = false;
  protected theme: Theme | null = null;


  public show(theme: Theme): void {
    this.visible = true;
    this.theme = theme;
  }

  protected confirm() {
    if(this.theme){
      this.onConfirm.emit(this.theme);
    }

    this.theme = null;
    this.visible = false;
  }

  protected cancel() {
    this.theme = null;
    this.visible = false;
  }

  protected readonly CANCEL_ICON = CANCEL_ICON;
  protected readonly CONFIRM_ICON = CONFIRM_ICON;
}
