import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AdminguardService } from './adminguard.service';
@Injectable()
class StoreMock {
  select = jasmine.createSpy().and.returnValue(of('quote'));
  dispatch = jasmine.createSpy();
}
class MockRouter {
  navigate(path) { }
}
describe('AdminguardService', () => {
  let service: AdminguardService;
  beforeEach(() => {
    const activatedRouteSnapshotStub = {};
    const routerStateSnapshotStub = {};
    const routerStub = { navigate: array => ({}) };
    const storeStub = { select: userSelector => ({ subscribe: () => ({}) }) };
    TestBed.configureTestingModule({
      providers: [
        AdminguardService,
        {
          provide: ActivatedRouteSnapshot,
          useValue: activatedRouteSnapshotStub
        },
        { provide: RouterStateSnapshot, useValue: routerStateSnapshotStub },
        { provide: Router, useValue: routerStub },
        { provide: Store, useValue: storeStub }
      ]
    });
    service = TestBed.get(AdminguardService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('canActivate', () => {
    describe('canActivate', () => {
      let authGuard: AdminguardService;
      let authService;
      let router;
      let state;

      it('should return false for unauthorized user', () => {
        authService = { isLoggedIn: () => true };
        router = new MockRouter();
        state = new StoreMock();
        authGuard = new AdminguardService(router, state);


        expect(authGuard.canActivate(router, state)).toEqual(false);
      });
    });
  });
});
