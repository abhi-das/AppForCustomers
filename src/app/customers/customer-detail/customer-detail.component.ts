import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { CustomerStoreService } from '../services/customer-store.service';
import { Customer } from '../models/customer';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerDetailComponent implements OnInit {

  statusIcon: any;
  custByBusinessRef: Customer;

  constructor(private _titleSrv: Title, private _actRouter: ActivatedRoute,
    private _custSrv: CustomersService, private _custStoreSrv: CustomerStoreService) { }

  ngOnInit() {

    this.setPageTitle( 'Customer Details' );

    this._actRouter.paramMap.subscribe(params => {

      const bRef = params.get('ref');

      this._custStoreSrv.customer$.subscribe(

        cust => {

          this.custByBusinessRef = cust.filter((itm, idx) => {
            return itm.businessReference === bRef;
          })[0];

          if ( this.custByBusinessRef ) {
            this.statusIcon = this._custSrv.getStatusIcon(this.custByBusinessRef);
          }
          // console.log(this.custByBusinessRef)
        },
        err => {
          console.log( 'Detail does available ', err);
        }
      );
    });
  }

  setPageTitle( pgTitle: string ) {

    this._titleSrv.setTitle( pgTitle );

  }

}
