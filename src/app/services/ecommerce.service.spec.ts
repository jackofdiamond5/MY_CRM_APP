import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ECommerceService } from './ecommerce.service';

describe('ECommerceService', () => {
  let service: ECommerceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ECommerceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
