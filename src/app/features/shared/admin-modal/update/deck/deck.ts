import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Button} from "primeng/button";
import {Dialog} from "primeng/dialog";
import {InputText} from "primeng/inputtext";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Theme} from '../../../../../core/theme/theme.model';
import {CANCEL_ICON, CONFIRM_ICON} from '../../../../../core/icon/icon.constants';
import {Deck} from '../../../../../core/deck/deck.model';
import {Select} from 'primeng/select';
import {Language} from '../../../../../core/language/language.model';

@Component({
  selector: 'shared-admin-modal-update-deck',
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
export class UpdateDeckModal implements OnInit {
  @Output() onConfirm = new EventEmitter<Deck>();

  protected visible = false;
  protected form!: FormGroup;
  protected deck: Deck | null = null;
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

  public show(deck: Deck, themes: Theme[], languages: Language[]): void {
    this.form.reset();
    this.visible = true;
    this.deck = deck;
    this.themes = themes;
    this.languages = languages;

    this.form.patchValue({
      name: deck.name,
      themeId: deck.theme.id,
      languageId: deck.language.id
    });
  }

  protected confirm() {
    if(this.form.valid){
      if(this.deck){
        const name = this.form.value.name;
        const themeId = this.form.value.themeId
        const languageId = this.form.value.languageId

        const theme = this.themes.find((theme) => theme.id === themeId);
        const language = this.languages.find((language) => language.id === languageId);

        if(theme && language){
          this.onConfirm.emit({
            ...this.deck,
            name: name,
            theme: theme,
            language: language,
          });
        }
      }

      this.deck = null;
      this.form.reset();
      this.visible = false;
    }
  }

  protected cancel() {
    this.deck = null;
    this.form.reset();
    this.visible = false;
  }

  protected readonly CONFIRM_ICON = CONFIRM_ICON;
  protected readonly CANCEL_ICON = CANCEL_ICON;
}
