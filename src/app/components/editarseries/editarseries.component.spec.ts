import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarseriesComponent } from './editarseries.component';

describe('EditarseriesComponent', () => {
  let component: EditarseriesComponent;
  let fixture: ComponentFixture<EditarseriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarseriesComponent]
    });
    fixture = TestBed.createComponent(EditarseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
