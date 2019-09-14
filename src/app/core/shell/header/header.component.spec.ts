// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { MatDialog } from '@angular/material';
// import { AuthService } from 'angular-6-social-login';
// import { LoginService } from '../../services/login.service';
// import { UserDetailService } from '../../services/userDetails.service';
// import { Router } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { UiService } from '../../../shared/ui-service.service';
// import { HeaderComponent } from './header.component';
// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;
//   beforeEach(() => {
//     const matDialogStub = {};
//     const authServiceStub = {
//       signIn: socialPlatformProvider => ({
//         then: () => ({ catch: () => ({}) })
//       }),
//       signOut: () => ({ then: () => ({}) })
//     };
//     const loginServiceStub = { getUserData: () => ({ subscribe: () => ({}) }) };
//     const userDetailServiceStub = { addNewUser: userData => ({}) };
//     const routerStub = { navigate: array => ({}) };
//     const storeStub = {
//       dispatch: arg => ({}),
//       select: userSelector => ({ subscribe: () => ({}) })
//     };
//     const uiServiceStub = { showMessage: (string, string1, number) => ({}) };
//     TestBed.configureTestingModule({
//       schemas: [NO_ERRORS_SCHEMA],
//       declarations: [HeaderComponent],
//       providers: [
//         { provide: MatDialog, useValue: matDialogStub },
//         { provide: AuthService, useValue: authServiceStub },
//         { provide: LoginService, useValue: loginServiceStub },
//         { provide: UserDetailService, useValue: userDetailServiceStub },
//         { provide: Router, useValue: routerStub },
//         { provide: Store, useValue: storeStub },
//         { provide: UiService, useValue: uiServiceStub }
//       ]
//     });
//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//   });
//   it('can load instance', () => {
//     expect(component).toBeTruthy();
//   });
//   it('authFlag defaults to: false', () => {
//     expect(component.authFlag).toEqual(false);
//   });
//   it('signUpFlag defaults to: false', () => {
//     expect(component.signUpFlag).toEqual(false);
//   });
//   it('adminFlag defaults to: false', () => {
//     expect(component.adminFlag).toEqual(false);
//   });
//   describe('loadProfile', () => {
//     it('makes expected calls', () => {
//       const routerStub: Router = fixture.debugElement.injector.get(Router);
//       spyOn(routerStub, 'navigate').and.callThrough();
//       component.loadProfile();
//       expect(routerStub.navigate).toHaveBeenCalled();
//     });
//   });
//   describe('ngOnInit', () => {
//     it('makes expected calls', () => {
//       const storeStub: Store = fixture.debugElement.injector.get(Store);
//       spyOn(storeStub, 'select').and.callThrough();
//       component.ngOnInit();
//       expect(storeStub.select).toHaveBeenCalled();
//     });
//   });
//   describe('openSearchPage', () => {
//     it('makes expected calls', () => {
//       const routerStub: Router = fixture.debugElement.injector.get(Router);
//       spyOn(routerStub, 'navigate').and.callThrough();
//       component.openSearchPage();
//       expect(routerStub.navigate).toHaveBeenCalled();
//     });
//   });
// });
