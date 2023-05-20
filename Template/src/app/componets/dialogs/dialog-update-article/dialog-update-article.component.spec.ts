import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateArticleComponent } from './dialog-update-article.component';

describe('DialogUpdateArticleComponent', () => {
  let component: DialogUpdateArticleComponent;
  let fixture: ComponentFixture<DialogUpdateArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
