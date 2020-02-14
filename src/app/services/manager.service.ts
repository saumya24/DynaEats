import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private managerDataURL = 'assets/demo-data/manager-data.json';

  constructor(private http: HttpClient) { }

  public getMangerData(): Observable<any> {
    return this.http.get(this.managerDataURL);
  }
}
