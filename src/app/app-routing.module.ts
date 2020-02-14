import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';


export const routes: Routes = [
  {
    path: '',
    loadChildren: './views/views.module#ViewsModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const router: ModuleWithProviders = RouterModule.forRoot(routes);
