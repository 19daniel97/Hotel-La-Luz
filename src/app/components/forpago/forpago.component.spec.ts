import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForpagoComponent } from './forpago.component';

describe('ForpagoComponent', () => {
  let component: ForpagoComponent;
  let fixture: ComponentFixture<ForpagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForpagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
