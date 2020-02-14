import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/guards/auth-guard.service';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  username: string;
  password: string;
  user: string;
  chefType: string;
  isManagerLoggedIn: boolean;
  isChefLoggedIn: boolean;
  isWrongUser = false;

  constructor(private router: Router, public signInServ: SignInService, public authService: AuthGuardService ) {
    this.chefType = '1';
    this.user = '1';
  }

  ngOnInit() {
  }

  public login() {
    if (this.user === '1') {
      this.isManagerLoggedIn = this.signInServ.loginManager(this.username, this.password);
      if (this.isManagerLoggedIn) {
        this.authService.isLoggedIn = true;
        this.router.navigate(['/manager/dashboard']);
      } else {
        this.isWrongUser = true;

      }
    } else {
      this.isChefLoggedIn = this.signInServ.loginChef(this.username, this.password, this.chefType);
      if (this.isChefLoggedIn) {
        this.authService.isLoggedIn = true;
        this.router.navigate(['/chefs/dashboard'],
        {queryParams: { chefRole: this.chefType  }});
      } else {
        this.isWrongUser = true;

      }
    }


  }

}
