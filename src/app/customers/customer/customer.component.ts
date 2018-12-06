import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { CustomersService } from '../services/customers.service';

import { Customer } from '../models/customer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerComponent implements OnInit {

  @Input() customerInfo: Customer;

  statusIcon: any;

  constructor(private _custSrv: CustomersService ) { }

  ngOnInit() {

    // console.log(this.customerInfo);

    this.statusIcon = this._custSrv.getStatusIcon(this.customerInfo);
  }
}
