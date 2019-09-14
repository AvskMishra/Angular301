import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { SignInService } from './signin.service';
describe('SignInService', () => {
  let service: SignInService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SignInService]
    });
    service = TestBed.get(SignInService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('getUserData', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      service.getUserData().subscribe(res => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne(
        'http://localhost:3002/userDetails/'
      );
      expect(req.request.method).toEqual('GET');
      req.flush();
      httpTestingController.verify();
    });
  });
});
