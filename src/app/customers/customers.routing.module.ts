import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

export const customersRouter: Routes = [
  {
    path: '',
    component: CustomerListComponent,
    data: {
      pageName: 'Customer List'
    }
  },
  {
    path: ':ref',
    component: CustomerDetailComponent,
    data: {
      pageName: 'Customer Detail'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(customersRouter)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class CustomersRoutingModule { }
