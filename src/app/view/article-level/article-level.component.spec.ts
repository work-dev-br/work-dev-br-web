import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLevelComponent } from './article-level.component';

describe('ArticleLevelComponent', () => {
  let component: ArticleLevelComponent;
  let fixture: ComponentFixture<ArticleLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
