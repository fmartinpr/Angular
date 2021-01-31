import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aplication7Component } from './aplication7.component';

describe('Aplication7Component', () => {
  let component: Aplication7Component;
  let fixture: ComponentFixture<Aplication7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aplication7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aplication7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
