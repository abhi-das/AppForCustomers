import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { CustomersService } from '../services/customers.service';
import { Customer } from '../models/customer';

@Injectable({
    providedIn: 'root'
})
export class CustomerStoreService {

    private _cust: BehaviorSubject< Customer[] > = new BehaviorSubject([]);

    public customer$ = this._cust.asObservable();

    constructor(private _custSrv: CustomersService) {

        this.retrieveCustomers();
    }

    retrieveCustomers(): void {

        this._custSrv.getCustomers().subscribe(
            (customerList) => {
                this._cust.next(customerList['customers']);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
