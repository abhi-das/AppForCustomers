import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { appConstants } from '../../common/constants';
import { Customer } from '../models/customer';
import { appStatusIcon } from '../../common/status-icon';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private apiPoints = appConstants.serviceEndPoints;

  constructor(private _http: HttpClient) { }

  getCustomers(): Observable< Customer[] > {

    return this._http.get<Customer[]>(this.apiPoints.customerData, { responseType: 'json' });

  }

  getStatusIcon(custInfo: Customer): any {

    const status = custInfo.caseStatus.toLowerCase();

    switch ( status ) {

      case 'application loaded':
      case 'fund requested':
        return appStatusIcon.inProgressIcon;

      case 'fund received':
      case 'illustration issued':
        return appStatusIcon.completedIcon;

      default:
        return null;
    }
  }
}
