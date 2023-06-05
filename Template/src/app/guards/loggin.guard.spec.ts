import { TestBed } from '@angular/core/testing';

import { LogginGuard } from './loggin.guard';

describe('LogginGuard', () => {
  let guard: LogginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
