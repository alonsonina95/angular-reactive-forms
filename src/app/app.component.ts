import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { InputElement } from './module/form/interfaces/inputElement';
import { FormService } from './module/form/services/form.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login: Array<InputElement>;
  loginForm: FormGroup;

  constructor(private fc: FormService){
    this.login = [
      {
        element: 'input',
        label: 'Email',
        type: 'email',
        formControlName: 'email',
        validators: [Validators.required, Validators.email],
        placeholder: '',
        errorMessage: 'Email is not valid',
        disabled: false,
        icon: 'email',
        value: 'alonso@gmail.com'
      },
      {
        element: 'input',
        label: 'Testing',
        type: 'number',
        formControlName: 'testing',
        validators: [Validators.required, Validators.minLength(5)],
        placeholder: '',
        errorMessage: 'This is error from testing',
        disabled: false,
        icon: 'email',
        value: ''
      },
      {
        element: 'input',
        label: 'Password',
        type: 'password',
        formControlName: 'password',
        validators: [Validators.required, Validators.minLength(8)],
        placeholder: '',
        errorMessage: 'Password is required',
        disabled: false,
        icon: 'vpn_key',
        value: 'alonsopassword123'
      }
    ];

    this.loginForm = this.fc.createFormGroup(this.login);
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
