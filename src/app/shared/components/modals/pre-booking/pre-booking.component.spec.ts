// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { MatDialogRef } from '@angular/material';
// import { MatDialog } from '@angular/material';
// import { PreBookingComponent } from './pre-booking.component';
// describe('PreBookingComponent', () => {
//   let component: PreBookingComponent;
//   let fixture: ComponentFixture<PreBookingComponent>;
//   beforeEach(() => {
//     const matDialogRefStub = { close: () => ({}) };
//     const matDialogStub = {};
//     TestBed.configureTestingModule({
//       schemas: [NO_ERRORS_SCHEMA],
//       declarations: [PreBookingComponent],
//       providers: [
//         { provide: MatDialogRef, useValue: matDialogRefStub },
//         { provide: MatDialog, useValue: matDialogStub }
//       ]
//     });
//     fixture = TestBed.createComponent(PreBookingComponent);
//     component = fixture.componentInstance;
//   });
//   it('can load instance', () => {
//     expect(component).toBeTruthy();
//   });
//   describe('onNoClick', () => {
//     it('makes expected calls', () => {
//       const matDialogRefStub: MatDialogRef = fixture.debugElement.injector.get(
//         MatDialogRef
//       );
//       spyOn(matDialogRefStub, 'close').and.callThrough();
//       component.onNoClick();
//       expect(matDialogRefStub.close).toHaveBeenCalled();
//     });
//   });
// });
