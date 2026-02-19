import {Component, Input} from '@angular/core';
import {Item} from './item/item';
import {Deck} from '../../../../core/deck/deck.model';

@Component({
  selector: 'decks-manager-grid',
  imports: [
    Item
  ],
  templateUrl: './grid.html',
  styleUrl: './grid.css',
})
export class Grid {
  @Input() decks: Deck[] = [];
  @Input() loading: boolean = false;

}
