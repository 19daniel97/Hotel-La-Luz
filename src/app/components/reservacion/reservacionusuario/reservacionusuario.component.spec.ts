import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionusuarioComponent } from './reservacionusuario.component';


describe('ReservacionusuarioComponent', () => {
  let component: ReservacionusuarioComponent;
  let fixture: ComponentFixture<ReservacionusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservacionusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservacionusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
