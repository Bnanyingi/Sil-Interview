import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth
  ) {}


  googleAuth() {
    return this.authLogin(new GoogleAuthProvider());
  }

  authLogin(provider: GoogleAuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        //
      });
  }

  checkLogin() {
    return localStorage.getItem('album-app-session');
  }

  logout() {
    localStorage.removeItem('album-app-session');
  }

}
