import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateCustomerComponent } from './dialog-update-customer.component';

describe('DialogUpdateCustomerComponent', () => {
  let component: DialogUpdateCustomerComponent;
  let fixture: ComponentFixture<DialogUpdateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
