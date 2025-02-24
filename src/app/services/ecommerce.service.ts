import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { RevenueType } from '../models/ecommerce/revenue-type';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ECommerceService {
  constructor(
    private http: HttpClient
  ) { }

  public getRevenueList(): Observable<RevenueType[]> {
    return this.http.get<RevenueType[]>("https://excel2json.io/api/share/03e74dde-d2e1-4fee-437d-08da496bf5f2")
      .pipe(catchError(ErrorHandlerService.handleError<RevenueType[]>('getRevenueList', [])));
  }
}
