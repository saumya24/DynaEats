import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  private indianChefURL  = 'assets/demo-data/indian-chef.json';
  private bakeryChefURL  = 'assets/demo-data/bakery-chef.json';
  private italianChefURL = 'assets/demo-data/italian-chef.json';

  constructor(private http: HttpClient) { }
  public getIndianChefData(): Observable<any> {
    return this.http.get(this.indianChefURL);
  }
  public getBakeryData(): Observable<any> {
    return this.http.get(this.bakeryChefURL);
  }
  public getItalianChefData(): Observable<any> {
    return this.http.get(this.italianChefURL);
  }
}
