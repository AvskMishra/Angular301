
import { AuthGuard } from './authguard.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
class MockRouter {
  navigate(path) { }
}
@Injectable()
class StoreMock {
  select = jasmine.createSpy().and.returnValue(of('anyValue'));
  dispatch = jasmine.createSpy();
}


describe('AuthGuard', () => {
  describe('canActivate', () => {
    let authGuard: AuthGuard;
    let authService;
    let router;
    let state;

    it('will run positive scenario for proper logged in user', () => {
      authService = { isLoggedIn: () => true };
      router = new MockRouter();
      state = new StoreMock();
      authGuard = new AuthGuard(router, state);
      expect(authGuard.canActivate(router, state)).toEqual(true);
    });

  });
});
