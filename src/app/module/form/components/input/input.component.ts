import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { InputElement } from '../../interfaces/inputElement';
import { SelectElement } from '../../interfaces/selectElement';

export class MyErrorStateMatcher extends ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() formProp: InputElement | SelectElement;

  constructor() { }

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

}
