import { Injectable } from '@angular/core';
import { AuthGuardService } from './guards/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  username: string;

  constructor() { }

  public loginManager(username: string, password: string) {
      if (username === 'Manager1' && password === 'Man1') {
        this.setUserName(username);
        return true;
      }
  }

  public loginChef(username: string, password: string, role: any) {
    if (role === '1') {
      if (username === 'IndianChef' && password === 'Che1') {
        this.setUserName(username);
        return true;
      }
    } else if (role === '2') {
      if (username === 'BakeryChef' && password === 'Che2') {
        this.setUserName(username);
        return true;
      }
    } else if (role === '3') {
      if (username === 'ItalianChef' && password === 'Che3') {
        this.setUserName(username);
        return true;
      }
    }
  }

  public setUserName(username: string) {
    this.username = username;
  }

  public getUserName(): string {
    return this.username;
  }
}
