import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public isIndian = false;
  public isBakery = false;
  public isItalian = false;

  constructor(private route: ActivatedRoute, ) {
    this.route.queryParams.subscribe(param => {
      this.isIndian = param.chefRole === '1' ? true : false;
      this.isBakery = param.chefRole === '2' ? true : false;
      this.isItalian = param.chefRole === '3' ? true : false;
    });
  }

  ngOnInit() {}
}
