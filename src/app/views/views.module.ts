import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from '../core/material.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AuthGuardService } from '../services/guards/auth-guard.service';

@NgModule({
  declarations: [
    LayoutComponent,
    SignInComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [CommonModule, ViewsRoutingModule, MaterialModule, FormsModule],
  exports: [HeaderComponent],
  providers: [AuthGuardService]
})
export class ViewsModule {}
