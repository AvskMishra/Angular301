import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MovieCardComponent } from './movie-card.component';
import { BASE_URL, TMDB_URLS } from '../../../../shared/config';
describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  beforeEach(() => {
    const matDialogStub = {
      open: (preBookingComponent, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) }),
        componentInstance: {}
      })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MovieCardComponent],
      providers: [{ provide: MatDialog, useValue: matDialogStub }]
    });
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('imagesPath defaults to: TMDB_URLS.IMAGE_URL', () => {
    expect(component.imagesPath).toEqual(TMDB_URLS.IMAGE_URL);
  });
  it('castCrewPath defaults to: TMDB_URLS.CAST_CREW_SMALL', () => {
    expect(component.castCrewPath).toEqual(TMDB_URLS.CAST_CREW_SMALL);
  });
  it('movieName defaults to: Robot 2.O', () => {
    expect(component.movieName).toEqual('Robot 2.O');
  });
  it('rating defaults to: 4.7', () => {
    expect(component.rating).toEqual(4.7);
  });
  it('totalReviews defaults to: 51', () => {
    expect(component.totalReviews).toEqual(51);
  });
  describe('checKToDialog', () => {
    it('makes expected calls', () => {
      spyOn(component, 'openDialog').and.callThrough();
      spyOn(component, 'preBookDialog').and.callThrough();
      component.checKToDialog();
      expect(component.openDialog).toHaveBeenCalled();
      expect(component.preBookDialog).toHaveBeenCalled();
    });
  });
  describe('preBookDialog', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(matDialogStub, 'open').and.callThrough();
      component.preBookDialog();
      expect(matDialogStub.open).toHaveBeenCalled();
    });
  });
  describe('openDialog', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(matDialogStub, 'open').and.callThrough();
      component.openDialog();
      expect(matDialogStub.open).toHaveBeenCalled();
    });
  });
});
