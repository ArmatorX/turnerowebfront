import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarturnoComponent } from './buscarturno.component';

describe('BuscarturnoComponent', () => {
  let component: BuscarturnoComponent;
  let fixture: ComponentFixture<BuscarturnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarturnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarturnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
