import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipohabComponent } from './tipohab.component';

describe('TipohabComponent', () => {
  let component: TipohabComponent;
  let fixture: ComponentFixture<TipohabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipohabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipohabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
