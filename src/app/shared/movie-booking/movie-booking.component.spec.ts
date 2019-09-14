import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MovieBookingComponent } from './movie-booking.component';
describe('MovieBookingComponent', () => {
  let component: MovieBookingComponent;
  let fixture: ComponentFixture<MovieBookingComponent>;
  beforeEach(() => {

  // const  theaters = [{
  //     'name': 'ABC',
  //     'location': 'asdas',
  //     'timings' : ['2:00', '6:00', '9:00', '11:00']
  //   }];


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
  // it('theaters defaults to: []', () => {
  //   expect(component.theaters).toEqual([]);
  // });
});
