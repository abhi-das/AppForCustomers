import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomersRoutingModule } from './customers.routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CustomersService } from './services/customers.service';
import { CustomerStoreService } from './services/customer-store.service';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CustomersRoutingModule,
    HttpClientModule
  ],
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerComponent
  ],
  providers: [ CustomersService, CustomerStoreService ]
})
export class CustomersModule { }
