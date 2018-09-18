import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authentication: AngularFireAuth) { }

  loginFunction(email: string, password: string) {
    return new Promise((resolve, rejact) => {
      this.authentication.auth.signInWithEmailAndPassword(email, password).then(
        userData => resolve(userData), _error => rejact(_error)
      );
    });
  }
  logoutFunction() {
    this.authentication.auth.signOut();
  }

  getAuthFunction() {
    return this.authentication.authState;
  }
}
