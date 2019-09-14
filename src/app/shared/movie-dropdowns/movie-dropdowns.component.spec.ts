import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeService } from 'src/app/home/services/home.service';
import { MovieDropdownsComponent } from './movie-dropdowns.component';
describe('MovieDropdownsComponent', () => {
  let component: MovieDropdownsComponent;
  let fixture: ComponentFixture<MovieDropdownsComponent>;
  beforeEach(() => {
    const homeServiceStub = { getGenres: () => ({}) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MovieDropdownsComponent],
      providers: [{ provide: HomeService, useValue: homeServiceStub }]
    });
    fixture = TestBed.createComponent(MovieDropdownsComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('genresList defaults to: []', () => {
    expect(component.genresList).toEqual([]);
  });
  it('languageSelected defaults to: false', () => {
    expect(component.languageSelected).toEqual(false);
  });
  it('genreSelected defaults to: false', () => {
    expect(component.genreSelected).toEqual(false);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const homeServiceStub: HomeService = fixture.debugElement.injector.get(
        HomeService
      );
      spyOn(homeServiceStub, 'getGenres').and.callThrough();
      component.ngOnInit();
      expect(homeServiceStub.getGenres).toHaveBeenCalled();
    });
  });
});
