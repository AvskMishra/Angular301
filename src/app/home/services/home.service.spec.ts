// import { TestBed } from '@angular/core/testing';
// import {
//   HttpClientTestingModule,
//   HttpTestingController
// } from '@angular/common/http/testing';
// import { Store } from '@ngrx/store';
// import { HomeService } from './home.service';
// describe('HomeService', () => {
//   let service: HomeService;
//   beforeEach(() => {
//     const storeStub = { dispatch: arg => ({}) };
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [HomeService, { provide: Store, useValue: storeStub }]
//     });
//     service = TestBed.get(HomeService);
//   });
//   it('can load instance', () => {
//     expect(service).toBeTruthy();
//   });
//   it('genres defaults to: []', () => {
//     expect(service.genres).toEqual([]);
//   });
//   describe('fetchGenres', () => {
//     it('makes expected calls', () => {
//       const httpTestingController = TestBed.get(HttpTestingController);
//       service.fetchGenres().subscribe(res => {
//         expect(res).toEqual();
//       });
//       const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
//       expect(req.request.method).toEqual('GET');
//       req.flush();
//       httpTestingController.verify();
//     });
//   });
//   describe('getTheaterList', () => {
//     it('makes expected calls', () => {
//       const httpTestingController = TestBed.get(HttpTestingController);
//       const storeStub: Store = TestBed.get(Store);
//       spyOn(storeStub, 'dispatch').and.callThrough();
//       service.getTheaterList().subscribe(res => {
//         expect(res).toEqual();
//       });
//       const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
//       expect(req.request.method).toEqual('GET');
//       expect(storeStub.dispatch).toHaveBeenCalled();
//       req.flush();
//       httpTestingController.verify();
//     });
//   });
//   describe('getUserPreference', () => {
//     it('makes expected calls', () => {
//       const httpTestingController = TestBed.get(HttpTestingController);
//       service.getUserPreference().subscribe(res => {
//         expect(res).toEqual();
//       });
//       const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
//       expect(req.request.method).toEqual('GET');
//       req.flush();
//       httpTestingController.verify();
//     });
//   });
// });
