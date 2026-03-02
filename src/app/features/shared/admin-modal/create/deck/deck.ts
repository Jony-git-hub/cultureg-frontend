import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Button} from "primeng/button";
import {Dialog} from "primeng/dialog";
import {InputText} from "primeng/inputtext";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Theme} from '../../../../../core/theme/theme.model';
import {Deck} from '../../../../../core/deck/deck.model';
import {CANCEL_ICON, CONFIRM_ICON} from '../../../../../core/icon/icon.constants';
import {Select} from 'primeng/select';
import {Language} from '../../../../../core/language/language.model';

@Component({
  selector: 'shared-admin-modal-create-deck',
  imports: [
    Button,
    Dialog,
    InputText,
    ReactiveFormsModule,
    Select
  ],
  templateUrl: './deck.html',
  styleUrl: './deck.css',
})
export class CreateDeckModal implements OnInit {
  @Output() onConfirm = new EventEmitter<Deck>();

  protected visible = false;
  protected form!: FormGroup;
  protected themes: Theme[] = [];
  protected languages: Language[] = [];

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      themeId: [null, Validators.required],
      languageId: [null, Validators.required],
    })
  }

  public show(themes: Theme[], languages: Language[]) {
    this.themes = themes;
    this.languages = languages;
    this.form.reset();
    this.visible = true;
  }

  protected confirm() {
    if(this.form.valid){
      const name = this.form.value.name;
      const themeId = this.form.value.themeId
      const languageId = this.form.value.languageId

      const theme = this.themes.find((theme) => theme.id === themeId);
      const language = this.languages.find((language) => language.id === languageId);

      if(theme && language){
        //todo review ca (user)
        this.onConfirm.emit({
          id: -1,
          name: name,
          timestamp: 0,
          theme: theme,
          language: language,
          cards: [],
          user: {
            id: 1,
            email: 'string',
            password: 'string',
            firstName: 'string',
            lastName: 'string',
            pseudo: 'string',
            elo: 1,
            role: "string"
          }
        });

        this.form.reset();
        this.visible = false;
      }
    }
  }

  protected cancel() {
    this.form.reset();
    this.visible = false;
  }

  protected readonly CONFIRM_ICON = CONFIRM_ICON;
  protected readonly CANCEL_ICON = CANCEL_ICON;
}
