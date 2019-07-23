import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder , FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  loginForm: FormGroup;

  // tslint:disable-next-line: variable-name
  error_messages = {
    // tslint:disable-next-line: object-literal-key-quotes
    'username': [
      {type: 'required' , message: 'Username is required.'},
      {type: 'pattern' , message: 'Please enter a valid username.'}
    ],
    // tslint:disable-next-line: object-literal-key-quotes
    'password': [
      {type: 'required' , message: 'Password is required.'},
      {type: 'minLength' , message: 'Please enter a password longer and equals with 8'},
      {type: 'pattern' , message: 'Please enter a valid password.'}
    ],
     // tslint:disable-next-line: object-literal-key-quotes
     'email': [
      {type: 'required' , message: 'Email is required.'},
      {type: 'pattern' , message: 'Please enter a valid username.'}
    ],
    // tslint:disable-next-line: object-literal-key-quotes
    'password1': [
      {type: 'required' , message: 'Password is required.'},
      {type: 'pattern' , message: 'Please enter a valid password.'}
    ],

  };

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$')
      ])),

      password1: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$')
      ])),

      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),  
        Validators.pattern('^[a-zA-Z0-9_-]{4,15}$')
      ])),

      email: new FormControl ('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$')
      ]))

    });
  }

  ngOnInit() {
  }

}
