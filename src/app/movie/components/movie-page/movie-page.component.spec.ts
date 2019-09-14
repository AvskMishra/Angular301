import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MoviePageComponent } from './movie-page.component';
import { TMDB_URLS } from '../../../shared/config';
describe('MoviePageComponent', () => {
  let component: MoviePageComponent;
  let fixture: ComponentFixture<MoviePageComponent>;
  beforeEach(() => {
    const matDialogStub = {
      open: (preBookingComponent, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) }),
        componentInstance: {}
      })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MoviePageComponent],
      providers: [{ provide: MatDialog, useValue: matDialogStub }]
    });
    fixture = TestBed.createComponent(MoviePageComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('imagesPath defaults to: TMDB_URLS.IMAGE_URL', () => {
    expect(component.imagesPath).toEqual(TMDB_URLS.IMAGE_URL);
  });
  it('castCrew defaults to: TMDB_URLS.CAST_CREW_BIG', () => {
    expect(component.castCrew).toEqual(TMDB_URLS.CAST_CREW_BIG);
  });
  it('rating defaults to: [5]', () => {
    expect(component.rating).toEqual([5]);
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
