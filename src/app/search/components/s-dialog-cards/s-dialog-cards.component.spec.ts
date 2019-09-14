// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { SDialogCardsComponent } from './s-dialog-cards.component';
// describe('SDialogCardsComponent', () => {
//   let component: SDialogCardsComponent;
//   let fixture: ComponentFixture<SDialogCardsComponent>;
//   beforeEach(() => {
//     const storeStub = { select: userSelector => ({ subscribe: () => ({}) }) };
//     TestBed.configureTestingModule({
//       schemas: [NO_ERRORS_SCHEMA],
//       declarations: [SDialogCardsComponent],
//       providers: [{ provide: Store, useValue: storeStub }]
//     });
//     fixture = TestBed.createComponent(SDialogCardsComponent);
//     component = fixture.componentInstance;
//   });
//   it('can load instance', () => {
//     expect(component).toBeTruthy();
//   });
//   it('userPreference defaults to: []', () => {
//     expect(component.userPreference).toEqual([]);
//   });
//   describe('ngOnInit', () => {
//     it('makes expected calls', () => {
//       const storeStub: Store = fixture.debugElement.injector.get(Store);
//       spyOn(storeStub, 'select').and.callThrough();
//       component.ngOnInit();
//       expect(storeStub.select).toHaveBeenCalled();
//     });
//   });
// });
