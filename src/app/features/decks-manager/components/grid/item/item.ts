import {Component, Input} from '@angular/core';
import {Card} from 'primeng/card';
import {Deck} from '../../../../../core/deck/deck.model';
import {Divider} from 'primeng/divider';
import {Button} from 'primeng/button';
import {CARD_ICON, DELETE_ICON, PLAY_ICON, UPDATE_ICON} from '../../../../../core/icon/icon.constants';
import {Tag} from 'primeng/tag';

@Component({
  selector: 'decks-manager-grid-item',
  imports: [
    Card,
    Divider,
    Tag,
    Button
  ],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
 @Input() deck!: Deck;
  protected readonly UPDATE_ICON = UPDATE_ICON;
  protected readonly DELETE_ICON = DELETE_ICON;
  protected readonly PLAY_ICON = PLAY_ICON;
  protected readonly CARD_ICON = CARD_ICON;
}
