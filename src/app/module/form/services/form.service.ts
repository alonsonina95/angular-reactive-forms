import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { InputElement } from '../interfaces/inputElement';
import { SelectElement } from '../interfaces/selectElement';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) { }

  createFormGroup(formObject: Array<SelectElement | InputElement>, validator?: ValidatorFn) {
    const form = {};
    formObject.forEach((val: InputElement | SelectElement) => {
      if(val.element === 'input') {
        form[val.formControlName] = [{value: val.value ? val.value : '', disabled: val.disabled}, val.validators]
      } else if (val.element === 'select') {
        form[val.formControlName] = ['', val.validators];
      } else if(val.element === "DatePicker") {
        form[val.formControlName] = ['', val.validators];
      }
    });

    if(validator) {
      return new FormBuilder().group(form, {validators: validator});
    } else {
      return new FormBuilder().group(form);
    }
  }

  confirmPasswordMatch: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value ? {passwordMatch: true} : null;
  }
}
