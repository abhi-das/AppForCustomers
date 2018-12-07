import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientModule } from '@angular/common/http';
import { CustomersRoutingModule, customersRouter } from './customers.routing.module';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { Router } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

import { AppComponent } from '../app.component';
import { CustomersService } from './services/customers.service';
import { CustomerStoreService } from './services/customer-store.service';

describe('Customer Routing Module', () => {

    let custRoutingMod: CustomersRoutingModule;
    let location: Location;
    let localRouter: Router;
    let fixture;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ RouterTestingModule.withRoutes(customersRouter), HttpClientModule ],
            declarations: [ CustomerComponent, CustomerListComponent, 
                CustomerDetailComponent, AppComponent,
                HeaderComponent, FooterComponent ],
            providers: [ CustomersService, CustomerStoreService ]
        });

        localRouter = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(AppComponent);
        localRouter.initialNavigation();
    });

    // beforeEach(() => {
    //     custRoutingMod = new CustomersRoutingModule();
    // });

    it('Create Customers Routing Module', fakeAsync(() => {
        // expect(custRoutingMod).toBeTruthy();
        localRouter.navigate(['']);

        tick();
        fixture.detectChanges()
        expect(location.path()).toBe('');
    }));
});
