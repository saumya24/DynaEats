import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefsRoutingModule } from './chefs-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from 'src/app/core/material.module';
import { HeaderComponent } from '../header/header.component';
import { ViewsModule } from '../views.module';
import { IndianChefComponent } from './indian-chef/indian-chef.component';
import { ItalianChefComponent } from './italian-chef/italian-chef.component';
import { BakeryChefComponent } from './bakery-chef/bakery-chef.component';


@NgModule({
  declarations: [DashboardComponent, IndianChefComponent, ItalianChefComponent, BakeryChefComponent],
  imports: [
    CommonModule,
    ChefsRoutingModule,
    MaterialModule,
    ViewsModule
  ]
})
export class ChefsModule { }
