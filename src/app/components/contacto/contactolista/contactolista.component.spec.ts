import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactolistaComponent } from './contactolista.component';

describe('ContactolistaComponent', () => {
  let component: ContactolistaComponent;
  let fixture: ComponentFixture<ContactolistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactolistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
