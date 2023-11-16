import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateseriesComponent } from './createseries.component';

describe('CreateseriesComponent', () => {
  let component: CreateseriesComponent;
  let fixture: ComponentFixture<CreateseriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateseriesComponent]
    });
    fixture = TestBed.createComponent(CreateseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
