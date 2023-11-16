import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallespersonajeComponent } from './detallespersonaje.component';

describe('DetallespersonajeComponent', () => {
  let component: DetallespersonajeComponent;
  let fixture: ComponentFixture<DetallespersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallespersonajeComponent]
    });
    fixture = TestBed.createComponent(DetallespersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
