import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShippingCarComponent } from './dialog-shipping-car.component';

describe('DialogShippingCarComponent', () => {
  let component: DialogShippingCarComponent;
  let fixture: ComponentFixture<DialogShippingCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogShippingCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogShippingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
