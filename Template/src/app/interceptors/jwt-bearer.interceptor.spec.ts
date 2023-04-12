import { TestBed } from '@angular/core/testing';

import { JwtBearerInterceptor } from './jwt-bearer.interceptor';

describe('JwtBearerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtBearerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtBearerInterceptor = TestBed.inject(JwtBearerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
