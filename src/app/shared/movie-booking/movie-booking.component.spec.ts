import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MovieBookingComponent } from './movie-booking.component';
describe('MovieBookingComponent', () => {
  let component: MovieBookingComponent;
  let fixture: ComponentFixture<MovieBookingComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MovieBookingComponent]
    });
    fixture = TestBed.createComponent(MovieBookingComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
