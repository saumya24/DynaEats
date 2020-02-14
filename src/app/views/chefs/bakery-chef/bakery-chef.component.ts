import { Component, OnInit } from '@angular/core';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-bakery-chef',
  templateUrl: './bakery-chef.component.html',
  styleUrls: ['./bakery-chef.component.scss']
})
export class BakeryChefComponent implements OnInit {
  public BakeryData: any;

  constructor(public chefService: ChefService) {
    this.chefService.getBakeryData().subscribe(bakResp => {
      this.BakeryData = bakResp['0'].responseBody.foods;
    });
   }

  ngOnInit() {
  }

}
