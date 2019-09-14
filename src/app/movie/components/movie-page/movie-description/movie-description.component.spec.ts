import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MovieDescriptionComponent } from './movie-description.component';
describe('MovieDescriptionComponent', () => {
  let component: MovieDescriptionComponent;
  let fixture: ComponentFixture<MovieDescriptionComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MovieDescriptionComponent]
    });
    fixture = TestBed.createComponent(MovieDescriptionComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
