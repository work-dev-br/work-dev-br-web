import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articles001Component } from './articles001.component';

describe('Articles001Component', () => {
  let component: Articles001Component;
  let fixture: ComponentFixture<Articles001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Articles001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Articles001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
