import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-form-change-request',
  templateUrl: './form-change-request.component.html',
  styleUrls: ['./form-change-request.component.css']
})
export class FormChangeRequestComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}
