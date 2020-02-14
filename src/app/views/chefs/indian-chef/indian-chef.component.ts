import { Component, OnInit } from '@angular/core';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-indian-chef',
  templateUrl: './indian-chef.component.html',
  styleUrls: ['./indian-chef.component.scss']
})
export class IndianChefComponent implements OnInit {
  public IndianData: any;
  constructor(public chefService: ChefService) {
    this.chefService.getIndianChefData().subscribe(indResp => {
      this.IndianData = indResp['0'].responseBody.foods;
    });
   }

  ngOnInit() {
  }

}
