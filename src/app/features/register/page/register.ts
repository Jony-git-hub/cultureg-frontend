import {Component, OnInit} from '@angular/core';
import {ButtonDirective, ButtonIcon, ButtonLabel} from "primeng/button";
import {Card} from "primeng/card";
import {InputText} from "primeng/inputtext";
import {RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UserApi} from '../../../core/user/user.api';
import {USER_ICON} from '../../../core/icon/icon.constants';

@Component({
  selector: 'app-register',
  imports: [
    ButtonDirective,
    ButtonIcon,
    ButtonLabel,
    Card,
    InputText,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterPage implements OnInit {
  protected form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userApi: UserApi,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      pseudo: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  register() {
    console.log(this.form.value)

    if(this.form.valid){
      const payload = {
        pseudo: this.form.value.pseudo,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        email: this.form.value.email,
        password: this.form.value.password,
      }
      this.userApi.add(payload).subscribe({
        next: (res) => {
          console.log('Réponse du serveur :', res);
        },
        error: (err) => {
          console.error('Erreur lors de la requête :', err);
        }
      });
    }else{

    }
  }

  protected readonly USER_ICON = USER_ICON;
}
