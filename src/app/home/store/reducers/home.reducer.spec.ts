
import {
    SetNowPlayingMovies, SetUpcomingMovies, SetTheaters
} from '../actions/home.action';
import { moviesReducer } from './home.reducer';
import { } from './home.reducer';
import { } from './home.reducer';
describe('Reducer test', () => {
    beforeEach(() => {
    });
    it('could test now playing', async () => {
        const action = new SetNowPlayingMovies([{
            title: 'Movie1', id: 1, popularity: 'most Popular', poster_path: 'abc.def.com',
            release_date: '12/12/2019', original_language: 'English',
            overview: 'text_for_overview', genre_ids: 'any', vote_average: 12, vote_count: 12,
        }]);
        const result = moviesReducer(undefined, action);
        const expectedResult = {
            nowPlayingMovies: [{
                title: 'Movie1', id: 1, popularity: 'most Popular', poster_path: 'abc.def.com',
            release_date: '12/12/2019', original_language: 'English',
            overview: 'text_for_overview', genre_ids: 'any', vote_average: 12, vote_count: 12,
            }],
            upcomingMovies: [],
            setTheaters: [],
        };

        expect(result).toEqual(expectedResult);
    });
    it('could test set Upcoming', async () => {
        const action = new SetUpcomingMovies([{
            title: 'Movie1', id: 1, popularity: 'most Popular', poster_path: 'abc.def.com',
            release_date: '12/12/2019', original_language: 'English',
            overview: 'text_for_overview', genre_ids: 'any', vote_average: 12, vote_count: 12,
        }]);
        const result = moviesReducer(undefined, action);
        const expectedResult = {
            nowPlayingMovies: [],
            upcomingMovies: [{
                title: 'Movie11', id: 1, popularity: 'most Popular', poster_path: 'abc.def.com',
                release_date: '12/12/2019', original_language: 'English',
                overview: 'text_for_overview', genre_ids: 'any', vote_average: 12, vote_count: 12,
            }],
            setTheaters: [],
        }
        expect(result).not.toEqual(expectedResult);
    });
    it('should test USerReducer', async () => {
        const action = new SetTheaters([{
            title: 'Movie1', id: 1, popularity: 'most Popular', poster_path: 'abc.def.com',
            release_date: '12/12/2019', original_language: 'English',
            overview: 'text_for_overview', genre_ids: 'any', vote_average: 12, vote_count: 12,
        }]);
        const result = moviesReducer(undefined, action);
        expect(result).toBeTruthy();
    });
});
