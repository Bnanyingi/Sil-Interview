import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  googleSignIn(){
    this.authService.googleAuth()
    .then(response => {
      localStorage.setItem('album-app-session', JSON.stringify(response));
      this.router.navigate(['/']);
    })
    .catch((error) => {
      //
    });
  }


}
