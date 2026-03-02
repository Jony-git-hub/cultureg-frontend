import {Component, EventEmitter, Output} from '@angular/core';
import {Button} from "primeng/button";
import {Dialog} from "primeng/dialog";
import {Deck} from '../../../../../core/deck/deck.model';
import {CANCEL_ICON, CONFIRM_ICON} from '../../../../../core/icon/icon.constants';

@Component({
  selector: 'shared-admin-modal-delete-deck',
  imports: [
    Button,
    Dialog
  ],
  templateUrl: './deck.html',
  styleUrl: './deck.css',
})
export class DeleteDeckModal {
  @Output() onConfirm = new EventEmitter<Deck>();

  protected visible = false;
  protected deck: Deck | null = null;


  public show(deck: Deck): void {
    this.visible = true;
    this.deck = deck;
  }

  protected confirm() {
    if(this.deck){
      this.onConfirm.emit(this.deck);
    }

    this.deck = null;
    this.visible = false;
  }

  protected cancel() {
    this.deck = null;
    this.visible = false;
  }

  protected readonly CANCEL_ICON = CANCEL_ICON;
  protected readonly CONFIRM_ICON = CONFIRM_ICON;
}
