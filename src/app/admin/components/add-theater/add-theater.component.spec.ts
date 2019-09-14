import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AddTheaterComponent } from './add-theater.component';
describe('AddTheaterComponent', () => {
  let component: AddTheaterComponent;
  let fixture: ComponentFixture<AddTheaterComponent>;
  beforeEach(() => {
    const formBuilderStub = {};
    const matDialogStub = { open: successDialog => ({}), closeAll: () => ({}) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AddTheaterComponent],
      providers: [
        FormBuilder ,
        { provide: MatDialog, useValue: matDialogStub }
      ]
    });
    fixture = TestBed.createComponent(AddTheaterComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
     const result = component.ngOnInit();
  });


  describe('onSubmit', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      // spyOn(matDialogStub, 'open').and.callThrough();
      component.onSubmit();
      // expect(matDialogStub.open).toHaveBeenCalled();
    });
  });




  describe('dialogOk', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(matDialogStub, 'closeAll').and.callThrough();
      component.dialogOk();
      expect(matDialogStub.closeAll).toHaveBeenCalled();
    });


  });
});
