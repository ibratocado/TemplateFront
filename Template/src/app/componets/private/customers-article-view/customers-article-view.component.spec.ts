import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersArticleViewComponent } from './customers-article-view.component';

describe('CustomersArticleViewComponent', () => {
  let component: CustomersArticleViewComponent;
  let fixture: ComponentFixture<CustomersArticleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersArticleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersArticleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
