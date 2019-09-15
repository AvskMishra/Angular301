import { async } from '@angular/core/testing';
import { MovieListService } from './movie-list.service';

describe('MovieListService', () => {
  let service;

  const httpClient: any = {};

  beforeEach(() => {
    service = new MovieListService(httpClient);
  });

  it('should run #getLanguageList()', async () => {
    const movieList = [{
      original_language: 'en'
    }, {
      original_language: 'en'
    }
    ];
    const result = service.getLanguageList(movieList);
  });

});
