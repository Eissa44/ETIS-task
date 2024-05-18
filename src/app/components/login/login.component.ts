import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService: AuthService) {}

  email: string = '';
  password: string = '';

  ngOnInit(): void {}

  login() {
    if (this.email == '') {
      alert('Please enter your email');
      return;
    }

    if (this.password == '') {
      alert('Please enter your password');
      return;
    }

    this._AuthService.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
