import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Dialog} from 'primeng/dialog';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Theme} from '../../../../../core/theme/theme.model';
import {CANCEL_ICON, CONFIRM_ICON} from '../../../../../core/icon/icon.constants';

@Component({
  selector: 'shared-admin-modal-create-theme',
  imports: [
    Dialog,
    Button,
    InputText,
    ReactiveFormsModule
  ],
  templateUrl: './theme.html',
  styleUrl: './theme.css',
})
export class CreateThemeModal implements OnInit {
  @Output() onConfirm = new EventEmitter<Theme>();

  protected visible = false;
  protected form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    })
  }

  public show(){
    this.form.reset();
    this.visible = true;
  }

  protected confirm() {
    if(this.form.valid){
      const name = this.form.value.name;

      this.onConfirm.emit({
        id: -1,
        name: name,
      });

      this.form.reset();
      this.visible = false;
    }
  }

  protected cancel() {
    this.form.reset();
    this.visible = false;
  }

  protected readonly CONFIRM_ICON = CONFIRM_ICON;
  protected readonly CANCEL_ICON = CANCEL_ICON;
}
