import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomersType } from '../models/northwind/customers-type';
import { Northwind } from '../static-data/northwind';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  public getCustomers(): Observable<CustomersType[]> {
    return of(Northwind['CustomersType']);
  }
}
