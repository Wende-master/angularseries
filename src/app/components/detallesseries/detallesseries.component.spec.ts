import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesseriesComponent } from './detallesseries.component';

describe('DetallesseriesComponent', () => {
  let component: DetallesseriesComponent;
  let fixture: ComponentFixture<DetallesseriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesseriesComponent]
    });
    fixture = TestBed.createComponent(DetallesseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
