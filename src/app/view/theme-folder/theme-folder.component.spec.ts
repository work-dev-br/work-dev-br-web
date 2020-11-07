import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeFolderComponent } from './theme-folder.component';

describe('ThemeFolderComponent', () => {
  let component: ThemeFolderComponent;
  let fixture: ComponentFixture<ThemeFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
