import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoute: Routes = [
  {
    path: 'customer-list',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: '',
    redirectTo: '/customer-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute, {
      enableTracing: true
    })
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRouteModule { }
