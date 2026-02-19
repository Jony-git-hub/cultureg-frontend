import {Component, Input} from '@angular/core';
import {Card} from 'primeng/card';
import {Deck} from '../../../../../core/deck/deck.model';
import {Divider} from 'primeng/divider';
import {Button, ButtonDirective, ButtonIcon, ButtonLabel} from 'primeng/button';

@Component({
  selector: 'decks-manager-grid-item',
  imports: [
    Card,
    Divider,
    ButtonDirective,
    ButtonLabel,
    ButtonIcon
  ],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
 @Input() deck!: Deck;
}
