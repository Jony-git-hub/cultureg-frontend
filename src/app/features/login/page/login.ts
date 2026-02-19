import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Checkbox} from 'primeng/checkbox';
import {InputText} from 'primeng/inputtext';
import {ButtonDirective, ButtonIcon, ButtonLabel} from 'primeng/button';
import {Card} from 'primeng/card';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    Checkbox,
    InputText,
    ButtonDirective,
    ButtonIcon,
    ButtonLabel,
    Card,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginPage {
  protected remember: boolean = false;

}
