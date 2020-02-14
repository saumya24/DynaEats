import { Component, OnInit } from '@angular/core';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-italian-chef',
  templateUrl: './italian-chef.component.html',
  styleUrls: ['./italian-chef.component.scss']
})
export class ItalianChefComponent implements OnInit {
  public ItalianData: any;

  constructor(public chefService: ChefService) {
    this.chefService.getItalianChefData().subscribe(italianData => {
      this.ItalianData = italianData['0'].responseBody.foods;
    });
  }

  ngOnInit() {
  }

}
