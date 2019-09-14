// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { MovieListService } from '../../../core/movie/movie-list.service';
// import { HomeService } from '../../../home/services/home.service';
// import { SegregateMovieService } from '../../services/segregate-movie.service';
// import { SearchApiService } from '../../services/search-api.service';
// import { SDialogComponent } from './s-dialog.component';
// describe('SDialogComponent', () => {
//   let component: SDialogComponent;
//   let fixture: ComponentFixture<SDialogComponent>;
//   beforeEach(() => {
//     const storeStub = {
//       select: nowPlayingMoviesSelector => ({ subscribe: () => ({}) })
//     };
//     const movieListServiceStub = { getLanguageList: moviesList => ({}) };
//     const homeServiceStub = { getGenres: () => ({}) };
//     const segregateMovieServiceStub = {};
//     const searchApiServiceStub = {
//       getMovies: searchString => ({ subscribe: () => ({}) }),
//       searchMovieFromStore: (originalMovieList, searchString) => ({})
//     };
//     TestBed.configureTestingModule({
//       schemas: [NO_ERRORS_SCHEMA],
//       declarations: [SDialogComponent],
//       providers: [
//         { provide: Store, useValue: storeStub },
//         { provide: MovieListService, useValue: movieListServiceStub },
//         { provide: HomeService, useValue: homeServiceStub },
//         { provide: SegregateMovieService, useValue: segregateMovieServiceStub },
//         { provide: SearchApiService, useValue: searchApiServiceStub }
//       ]
//     });
//     fixture = TestBed.createComponent(SDialogComponent);
//     component = fixture.componentInstance;
//   });
//   it('can load instance', () => {
//     expect(component).toBeTruthy();
//   });
//   it('bgColor defaults to: true', () => {
//     expect(component.bgColor).toEqual(true);
//   });
//   it('moviesList defaults to: []', () => {
//     expect(component.moviesList).toEqual([]);
//   });
//   it('genresList defaults to: []', () => {
//     expect(component.genresList).toEqual([]);
//   });
//   it('originalMovieList defaults to: []', () => {
//     expect(component.originalMovieList).toEqual([]);
//   });
//   it('lang defaults to: en', () => {
//     expect(component.lang).toEqual('en');
//   });
//   it('selectedLanguage defaults to: en', () => {
//     expect(component.selectedLanguage).toEqual('en');
//   });
//   it('movieObjArray defaults to: []', () => {
//     expect(component.movieObjArray).toEqual([]);
//   });
//   describe('ngOnInit', () => {
//     it('makes expected calls', () => {
//       const storeStub: Store = fixture.debugElement.injector.get(Store);
//       const movieListServiceStub: MovieListService = fixture.debugElement.injector.get(
//         MovieListService
//       );
//       const homeServiceStub: HomeService = fixture.debugElement.injector.get(
//         HomeService
//       );
//       const searchApiServiceStub: SearchApiService = fixture.debugElement.injector.get(
//         SearchApiService
//       );
//       spyOn(storeStub, 'select').and.callThrough();
//       spyOn(movieListServiceStub, 'getLanguageList').and.callThrough();
//       spyOn(homeServiceStub, 'getGenres').and.callThrough();
//       spyOn(searchApiServiceStub, 'getMovies').and.callThrough();
//       spyOn(searchApiServiceStub, 'searchMovieFromStore').and.callThrough();
//       component.ngOnInit();
//       expect(storeStub.select).toHaveBeenCalled();
//       expect(movieListServiceStub.getLanguageList).toHaveBeenCalled();
//       expect(homeServiceStub.getGenres).toHaveBeenCalled();
//       expect(searchApiServiceStub.getMovies).toHaveBeenCalled();
//       expect(searchApiServiceStub.searchMovieFromStore).toHaveBeenCalled();
//     });
//   });
// });
