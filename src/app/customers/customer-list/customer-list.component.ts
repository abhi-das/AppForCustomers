import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CustomerStoreService } from '../services/customer-store.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerListComponent implements OnInit {

  customerList: Array<Customer> = [];

  constructor(private _custStoreSrv: CustomerStoreService, private _titleSrv: Title) { }

  ngOnInit() {

    this._custStoreSrv.customer$.subscribe(
      (custList) => {
        // console.log(custList);
        this.customerList = custList;
      },
      (err) => {
        console.log('no list available ', err);
      }
    );

    this.setPageTitle('Customers');
  }

  setPageTitle( pgTitle: string ) {

    this._titleSrv.setTitle( pgTitle );

  }

}
