import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Store } from '@ngrx/store';
import { AdminComponent } from './admin.component';
describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  beforeEach(() => {
    const adminServiceStub = { newTheater: formData => ({}) };
    const storeStub = { select: theaterList => ({ subscribe: () => ({}) }) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AdminComponent],
      providers: [
        { provide: AdminService, useValue: adminServiceStub },
        { provide: Store, useValue: storeStub }
      ]
    });
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
//   describe('ngOnInit', () => {
//     it('makes expected calls', () => {
//       const storeStub: Store = fixture.debugElement.injector.get(Store);
//       spyOn(storeStub, 'select').and.callThrough();
//       component.ngOnInit();
//       expect(storeStub.select).toHaveBeenCalled();
//     });
//   });
});
