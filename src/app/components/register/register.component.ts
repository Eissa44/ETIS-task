import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService) {}

  email: string = '';
  password: string = '';

  register() {
    if (this.email === '') {
      alert('Please enter your email');
      return;
    }

    if (this.password === '') {
      alert('Please enter your password');
      return;
    }

    this._AuthService.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
