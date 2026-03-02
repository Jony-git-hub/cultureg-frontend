import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Button} from "primeng/button";
import {Dialog} from "primeng/dialog";
import {InputText} from "primeng/inputtext";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Language} from '../../../../../core/language/language.model';
import {CANCEL_ICON, CONFIRM_ICON} from '../../../../../core/icon/icon.constants';

@Component({
  selector: 'shared-admin-modal-create-language',
    imports: [
        Button,
        Dialog,
        InputText,
        ReactiveFormsModule
    ],
  templateUrl: './language.html',
  styleUrl: './language.css',
})
export class CreateLanguageModal implements OnInit {
  @Output() onConfirm = new EventEmitter<Language>();

  protected visible = false;
  protected form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
    })
  }

  public show(){
    this.form.reset();
    this.visible = true;
  }

  protected confirm() {
    if(this.form.valid){
      const name = this.form.value.name;
      const code = this.form.value.code;

      this.onConfirm.emit({
        id: -1,
        name: name,
        code: code
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
