import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from 'src/app/core/material.module';
import { FormsModule } from '@angular/forms';
import { ViewsModule } from '../views.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule,
    FormsModule,
    ViewsModule
  ]
})
export class ManagerModule { }
