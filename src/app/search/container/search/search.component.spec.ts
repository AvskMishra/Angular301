import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SearchComponent } from './search.component';
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  beforeEach(() => {
    const matDialogStub = {
      open: (sDialogComponent, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) })
      })
    };
    const routerStub = {};
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SearchComponent],
      providers: [
        { provide: MatDialog, useValue: matDialogStub },
        { provide: Router, useValue: routerStub }
      ]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'openSearchPage').and.callThrough();
      component.ngOnInit();
      expect(component.openSearchPage).toHaveBeenCalled();
    });
  });
  describe('openSearchPage', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(matDialogStub, 'open').and.callThrough();
      component.openSearchPage();
      expect(matDialogStub.open).toHaveBeenCalled();
    });
  });
});
