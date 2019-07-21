import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder , FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  // tslint:disable-next-line: variable-name
  error_messages = {
    // tslint:disable-next-line: object-literal-key-quotes
    'username': [
      {type: 'required' , message: 'Username is required.'},
      {type: 'minLength' , message: 'Username length must be longer or equal than 4 characters.'},
      {type: 'maxLength' , message: 'Username length must be lower or equal than 10 characters..'},
      {type: 'pattern' , message: 'Please enter a valid username.'}
    ],
    // tslint:disable-next-line: object-literal-key-quotes
    'password': [
      {type: 'required' , message: 'Password is required.'},
      {type: 'minLength' , message: 'Password length must be longer or equal than 6 characters.'},
      {type: 'maxLength' , message: 'Password length must be lower or equal than 30 characters.'},
      {type: 'pattern' , message: 'Please enter a valid password.'}
    ],

  };

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,30}$')
      ])),
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z0-9_-]{6,15}$')
      ]))
    });
  }

  ngOnInit() {
  }

  login() {
    console.log('username: ', this.loginForm.value.username);
    console.log('password: ', this.loginForm.value.password);
  }
}
