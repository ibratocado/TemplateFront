import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesAdminViewComponent } from './articles-admin-view.component';

describe('ArticlesAdminViewComponent', () => {
  let component: ArticlesAdminViewComponent;
  let fixture: ComponentFixture<ArticlesAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesAdminViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
