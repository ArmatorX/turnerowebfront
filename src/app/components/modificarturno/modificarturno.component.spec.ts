import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarturnoComponent } from './modificarturno.component';

describe('ModificarturnoComponent', () => {
  let component: ModificarturnoComponent;
  let fixture: ComponentFixture<ModificarturnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarturnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarturnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
