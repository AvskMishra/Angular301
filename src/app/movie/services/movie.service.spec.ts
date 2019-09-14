import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MovieService } from './movie.service';
describe('MovieService', () => {
  let service: MovieService;

  function setup() {
    const movieService = TestBed.get(MovieService);
    const httpTestingController = TestBed.get(HttpTestingController);
    return { movieService, httpTestingController };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
    service = TestBed.get(MovieService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('should call the movie data', () => {
    const { movieService , httpTestingController } = setup();
    // tslint:disable-next-line: max-line-length
    const mockGoogleMapData = {id: 1, country : 'United states of america', zipcode: '56743'};
    movieService.getMovie(441282).subscribe(data => {
      expect(data.mapData).toEqual(mockGoogleMapData);
    });
  });

  it('should call the movie crew data', () => {
    const { movieService , httpTestingController } = setup();
    const mockGoogleMapData = {id: 1, country : 'United states of america', zipcode: '56743'};
    movieService.getCastAndCrew(441282).subscribe(data => {
      expect(data.mapData).toEqual(mockGoogleMapData);
    });
  });

});
