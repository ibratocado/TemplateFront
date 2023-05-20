import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddStoreArticleComponent } from './dialog-add-store-article.component';

describe('DialogAddStoreArticleComponent', () => {
  let component: DialogAddStoreArticleComponent;
  let fixture: ComponentFixture<DialogAddStoreArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddStoreArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddStoreArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
