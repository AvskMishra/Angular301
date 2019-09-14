// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { MatDialogRef } from '@angular/material';
// import { Router } from '@angular/router';
// import { ConfirmationModalComponent } from './confirmation-modal.component';
// describe('ConfirmationModalComponent', () => {
//   let component: ConfirmationModalComponent;
//   let fixture: ComponentFixture<ConfirmationModalComponent>;
//   beforeEach(() => {
//     const matDialogRefStub = { close: string => ({}) };
//     const routerStub = { navigate: array => ({}) };
//     TestBed.configureTestingModule({
//       schemas: [NO_ERRORS_SCHEMA],
//       declarations: [ConfirmationModalComponent],
//       providers: [
//         { provide: MatDialogRef, useValue: matDialogRefStub },
//         { provide: Router, useValue: routerStub }
//       ]
//     });
//     fixture = TestBed.createComponent(ConfirmationModalComponent);
//     component = fixture.componentInstance;
//   });
//   it('can load instance', () => {
//     expect(component).toBeTruthy();
//   });
//   describe('onCloseConfirm', () => {
//     it('makes expected calls', () => {
//       const matDialogRefStub: MatDialogRef = fixture.debugElement.injector.get(
//         MatDialogRef
//       );
//       const routerStub: Router = fixture.debugElement.injector.get(Router);
//       spyOn(matDialogRefStub, 'close').and.callThrough();
//       spyOn(routerStub, 'navigate').and.callThrough();
//       component.onCloseConfirm();
//       expect(matDialogRefStub.close).toHaveBeenCalled();
//       expect(routerStub.navigate).toHaveBeenCalled();
//     });
//   });
// });
