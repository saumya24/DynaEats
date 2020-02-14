import { Component, OnInit } from '@angular/core';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;

  constructor(public signInServ: SignInService) { }

  ngOnInit() {
  this.username = this.signInServ.getUserName();
  }

}
