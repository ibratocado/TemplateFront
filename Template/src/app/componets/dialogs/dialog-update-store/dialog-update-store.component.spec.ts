import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateStoreComponent } from './dialog-update-store.component';

describe('DialogUpdateStoreComponent', () => {
  let component: DialogUpdateStoreComponent;
  let fixture: ComponentFixture<DialogUpdateStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
