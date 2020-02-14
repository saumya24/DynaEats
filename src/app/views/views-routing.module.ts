import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from '../services/guards/auth-guard.service';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: SignInComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'manager',
        loadChildren: '../views/manager/manager.module#ManagerModule',
        canActivate : [AuthGuardService]
      },
      {
        path: 'chefs',
        loadChildren: '../views/chefs/chefs.module#ChefsModule',
        canActivate : [AuthGuardService]
      },
      {
        path: 'page-not-found',
        component: PageNotFoundComponent,
      },
      {
        path: '**',
        redirectTo: '/page-not-found',
      },
]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
