import { nowPlayingMoviesSelector } from './../../reducers/index';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;
  
  function setup() {
    const adminService = TestBed.get(AdminService);
    const httpTestingController = TestBed.get(HttpTestingController);
    return { adminService, httpTestingController };
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdminService]
    });
    service = TestBed.get(AdminService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('should search a movie', () => {
    const { adminService , httpTestingController } = setup();
    // tslint:disable-next-line: max-line-length
  //  const mockGoogleMapData = {id: 1, country : 'United states of america', zipcode: '56743'};
    adminService. searchMovie('IT').subscribe(data => {
      expect(data).toEqual('IT');
    });
  });


  // it('should saveNowPlayinge', () => {
  //   const { adminService , httpTestingController } = setup();
  //   // tslint:disable-next-line: max-line-length
  // //  const mockGoogleMapData = {id: 1, country : 'United states of america', zipcode: '56743'};
  //   adminService.nowPlayingMoviesSelector('IT', '1').subscribe(data => {
  //     expect(data).toEqual('IT','1');
  //   });
  // });

});
