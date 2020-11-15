import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyCodeComponent } from './copy-code.component';

describe('CopyCodeComponent', () => {
  let component: CopyCodeComponent;
  let fixture: ComponentFixture<CopyCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
