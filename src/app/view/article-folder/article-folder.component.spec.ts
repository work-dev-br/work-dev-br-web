import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFolderComponent } from './article-folder.component';

describe('ArticleFolderComponent', () => {
  let component: ArticleFolderComponent;
  let fixture: ComponentFixture<ArticleFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
