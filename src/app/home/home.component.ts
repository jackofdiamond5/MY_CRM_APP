import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CustomersType } from '../models/northwind/customers-type';
import { MeetingsTasksType } from '../models/crmapp-data/meetings-tasks-type';
import { RevenueType } from '../models/ecommerce/revenue-type';
import { ECommerceService } from '../services/ecommerce.service';
import { CRMAppDataService } from '../services/crmapp-data.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public eCommerceRevenue: RevenueType[] = [];
  public northwindCustomers: CustomersType[] = [];
  public cRMAppDataMeetingsTasks: MeetingsTasksType[] = [];

  constructor(
    private eCommerceService: ECommerceService,
    private northwindService: NorthwindService,
    private cRMAppDataService: CRMAppDataService,
  ) {}

  ngOnInit() {
    this.eCommerceService.getRevenueList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.eCommerceRevenue = data
    );
    this.northwindService.getCustomers().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindCustomers = data,
      error: (_err: any) => this.northwindCustomers = []
    });
    this.cRMAppDataService.getMeetingsTasksList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.cRMAppDataMeetingsTasks = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
