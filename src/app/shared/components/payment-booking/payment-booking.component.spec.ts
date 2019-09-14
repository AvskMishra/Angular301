import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PaymentBookingComponent } from './payment-booking.component';
describe('PaymentBookingComponent', () => {
  let component: PaymentBookingComponent;
  let fixture: ComponentFixture<PaymentBookingComponent>;
  beforeEach(() => {
    const matDialogStub = {
      open: (confirmationModalComponent, object) => ({})
    };
    const activatedRouteStub = {
      snapshot: {
        params: { movieTitle: {}, theatre: {}, time: {}, seat: {}, total: {} }
      }
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PaymentBookingComponent],
      providers: [
        { provide: MatDialog, useValue: matDialogStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(PaymentBookingComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('openConfirmDialog', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(matDialogStub, 'open').and.callThrough();
      component.openConfirmDialog();
      expect(matDialogStub.open).toHaveBeenCalled();
    });
  });
});
