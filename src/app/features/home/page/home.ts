import { Component } from '@angular/core';
import {Card} from "primeng/card";
import {ButtonDirective, ButtonIcon, ButtonLabel} from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';
import {PLAY_ICON, USER_ICON} from '../../../core/icon/icon.constants';

@Component({
  selector: 'app-home',
  imports: [
    Card,
    ButtonDirective,
    ButtonIcon,
    ButtonLabel,
    ReactiveFormsModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  protected readonly USER_ICON = USER_ICON;
  protected readonly PLAY_ICON = PLAY_ICON;
}
