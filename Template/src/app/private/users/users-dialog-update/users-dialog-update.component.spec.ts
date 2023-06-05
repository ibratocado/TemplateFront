import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDialogUpdateComponent } from './users-dialog-update.component';

describe('UsersDialogUpdateComponent', () => {
  let component: UsersDialogUpdateComponent;
  let fixture: ComponentFixture<UsersDialogUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDialogUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
