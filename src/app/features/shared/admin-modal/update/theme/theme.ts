import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Theme} from '../../../../../core/theme/theme.model';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';
import {CANCEL_ICON, CONFIRM_ICON} from '../../../../../core/icon/icon.constants';

@Component({
  selector: 'shared-admin-modal-update-theme',
  imports: [
    Button,
    Dialog,
    InputText,
    ReactiveFormsModule
  ],
  templateUrl: './theme.html',
  styleUrl: './theme.css',
})
export class UpdateThemeModal implements OnInit {
  @Output() onConfirm = new EventEmitter<Theme>();

  protected visible = false;
  protected form!: FormGroup;
  protected theme: Theme | null = null;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    })
  }

  public show(theme: Theme): void {
    this.form.reset();
    this.visible = true;
    this.theme = theme;

    this.form.patchValue({
      name: theme.name,
    });
  }

  protected confirm() {
    if(this.form.valid){
      if(this.theme){
        const name = this.form.value.name;

        this.onConfirm.emit({
          id: this.theme.id,
          name: name,
        });
      }

      this.theme = null;
      this.form.reset();
      this.visible = false;
    }
  }

  protected cancel() {
    this.theme = null;
    this.form.reset();
    this.visible = false;
  }

  protected readonly CONFIRM_ICON = CONFIRM_ICON;
  protected readonly CANCEL_ICON = CANCEL_ICON;
}
