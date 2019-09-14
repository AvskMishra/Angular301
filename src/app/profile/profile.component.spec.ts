// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { HomeService } from '../home/services/home.service';
// import { LoginService } from '../core/services/login.service';
// import { Store } from '@ngrx/store';
// import { MatDialog } from '@angular/material';
// import { FormBuilder } from '@angular/forms';
// import { ProfileComponent } from './profile.component';
// describe('ProfileComponent', () => {
//   let component: ProfileComponent;
//   let fixture: ComponentFixture<ProfileComponent>;
//   beforeEach(() => {
//     const homeServiceStub = {
//       setPreference: (value, arg1) => ({}),
//       getGenres: () => ({})
//     };
//     const loginServiceStub = { getUserData: () => ({ subscribe: () => ({}) }) };
//     const storeStub = { select: userSelector => ({ subscribe: () => ({}) }) };
//     const matDialogStub = { open: successDialog => ({}), closeAll: () => ({}) };
//     const formBuilderStub = {};
//     TestBed.configureTestingModule({
//       schemas: [NO_ERRORS_SCHEMA],
//       declarations: [ProfileComponent],
//       providers: [
//         { provide: HomeService, useValue: homeServiceStub },
//         { provide: LoginService, useValue: loginServiceStub },
//         { provide: Store, useValue: storeStub },
//         { provide: MatDialog, useValue: matDialogStub },
//         { provide: FormBuilder, useValue: formBuilderStub }
//       ]
//     });
//     fixture = TestBed.createComponent(ProfileComponent);
//     component = fixture.componentInstance;
//   });
//   it('can load instance', () => {
//     expect(component).toBeTruthy();
//   });
//   it('genresList defaults to: []', () => {
//     expect(component.genresList).toEqual([]);
//   });
//   it('theaterList defaults to: []', () => {
//     expect(component.theaterList).toEqual([]);
//   });
//   it('languageList defaults to: [, , , ]', () => {
//     expect(component.languageList).toEqual([, , ,]);
//   });
//   describe('submitPreferences', () => {
//     it('makes expected calls', () => {
//       const homeServiceStub: HomeService = fixture.debugElement.injector.get(
//         HomeService
//       );
//       const matDialogStub: MatDialog = fixture.debugElement.injector.get(
//         MatDialog
//       );
//       spyOn(homeServiceStub, 'setPreference').and.callThrough();
//       spyOn(matDialogStub, 'open').and.callThrough();
//       component.submitPreferences();
//       expect(homeServiceStub.setPreference).toHaveBeenCalled();
//       expect(matDialogStub.open).toHaveBeenCalled();
//     });
//   });
//   describe('ngOnInit', () => {
//     it('makes expected calls', () => {
//       const homeServiceStub: HomeService = fixture.debugElement.injector.get(
//         HomeService
//       );
//       const loginServiceStub: LoginService = fixture.debugElement.injector.get(
//         LoginService
//       );
//       const storeStub: Store = fixture.debugElement.injector.get(Store);
//       spyOn(homeServiceStub, 'getGenres').and.callThrough();
//       spyOn(loginServiceStub, 'getUserData').and.callThrough();
//       spyOn(storeStub, 'select').and.callThrough();
//       component.ngOnInit();
//       expect(homeServiceStub.getGenres).toHaveBeenCalled();
//       expect(loginServiceStub.getUserData).toHaveBeenCalled();
//       expect(storeStub.select).toHaveBeenCalled();
//     });
//   });
//   describe('sucess', () => {
//     it('makes expected calls', () => {
//       const matDialogStub: MatDialog = fixture.debugElement.injector.get(
//         MatDialog
//       );
//       spyOn(matDialogStub, 'closeAll').and.callThrough();
//       component.sucess();
//       expect(matDialogStub.closeAll).toHaveBeenCalled();
//     });
//   });
// });
