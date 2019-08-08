import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: [''],
      email: [''],
      subscribe: [false],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      dynamicEmailFields: this.fb.array([])
    });
    this.registrationForm.get('subscribe').valueChanges.subscribe(checkedValue => {
      const email = this.registrationForm.get('email');
      if (checkedValue) {
        email.setValidators(Validators.required);
      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity();

    });
   }

  get userName() {
    return this.registrationForm.get('userName');
  }
  get email() {
    return this.registrationForm.get('email');
  }

  get dynamicEmailFields() {
    return this.registrationForm.get('dynamicEmailFields') as FormArray;
  }

  addDynamicEmailFieldsToArray() {
    this.dynamicEmailFields.push(this.fb.control(''));
  }

  loadData() {
    this.registrationForm.patchValue({  //patchvalue helps to initialise only desired fields
      userName: 'Mike',                //whereas setvalue requires initializing all fields
      password: 'lllll'
    });
  }
}
