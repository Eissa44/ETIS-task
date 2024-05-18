import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _AngularFireAuth: AngularFireAuth,
    private _Router: Router
  ) {}

  // Login method
  login(email: string, password: string) {
    this._AngularFireAuth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this._Router.navigate(['/home']);
      },
      (err) => {
        alert(err.message);
        this._Router.navigate(['/login']);
      }
    );
  }

  // Register method
  register(email: string, password: string) {
    this._AngularFireAuth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('Registration Succesful');
        this._Router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
        this._Router.navigate(['/register']);
      }
    );
  }

  // Sign out method
  logout() {
    this._AngularFireAuth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this._Router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
