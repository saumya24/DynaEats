import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public ManageData: any;
  public isEditQuantity = false;
  public ManagerColumns = [
    {name: 'Name'},
    {name: 'Required Quantity'},
    {name: 'Vendor 1'},
    {name: 'Vendor 2'},
    {name: 'Received Quantity'},
    {name: 'Status'},
    {name: 'Bakery'},
    {name: 'Italian'},
    {name: 'Bakery'}
  ];

  constructor(public managerSerc: ManagerService) { }

  ngOnInit() {
  this.managerSerc.getMangerData().subscribe(resp => {
   this.ManageData = resp['0'].responseBody.foods;
  } );

  }
  public Edit() {
    this.isEditQuantity = true;
  }
  public Save() {
    this.isEditQuantity = false;
  }

}
