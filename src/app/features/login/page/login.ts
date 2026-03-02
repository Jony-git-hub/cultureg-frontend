import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Checkbox} from 'primeng/checkbox';
import {InputText} from 'primeng/inputtext';
import {ButtonDirective, ButtonIcon, ButtonLabel} from 'primeng/button';
import {Card} from 'primeng/card';
import {RouterLink} from '@angular/router';
import {USER_ICON} from '../../../core/icon/icon.constants';

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
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginPage implements OnInit {
  protected form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false, Validators.required],
    })
  }

  protected readonly USER_ICON = USER_ICON;
}
