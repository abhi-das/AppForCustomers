// import { TestBed, async, ComponentFixture } from '@angular/core/testing';

// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { CustomersRoutingModule } from './customers.routing.module';
// import { HttpClientModule } from '@angular/common/http';

// import { CustomersService } from './services/customers.service';
// import { CustomerStoreService } from './services/customer-store.service';

// import { CustomerListComponent } from './customer-list/customer-list.component';
// import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
// import { CustomerComponent } from './customer/customer.component';

import { CustomersModule } from './customers.module';

describe('Customer Module Creation', () => {

    let customersMod: CustomersModule;

    // beforeEach( async(() => {
       
    //     TestBed.configureTestingModule({

    //         imports:[ CommonModule, RouterModule, 
    //             CustomersRoutingModule, HttpClientModule ],

    //         declarations: [ CustomerListComponent, CustomerDetailComponent, 
    //             CustomerComponent ],

    //         providers: [ CustomersService, CustomerStoreService ]

    //     }).compileComponents();
    // }));

    beforeEach( () => {
        customersMod = new CustomersModule();
    });

    it('Create Customers Module', () => {

        expect(customersMod).toBeTruthy();
    });
});
