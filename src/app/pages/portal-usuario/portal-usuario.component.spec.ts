import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalUsuarioComponent } from './portal-usuario.component';

describe('PortalUsuarioComponent', () => {
  let component: PortalUsuarioComponent;
  let fixture: ComponentFixture<PortalUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
