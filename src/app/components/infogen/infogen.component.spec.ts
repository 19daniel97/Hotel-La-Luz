import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfogenComponent } from './infogen.component';

describe('InfogenComponent', () => {
  let component: InfogenComponent;
  let fixture: ComponentFixture<InfogenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfogenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
