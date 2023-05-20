import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddArticleComponent } from './dialog-add-article.component';

describe('DialogAddArticleComponent', () => {
  let component: DialogAddArticleComponent;
  let fixture: ComponentFixture<DialogAddArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
