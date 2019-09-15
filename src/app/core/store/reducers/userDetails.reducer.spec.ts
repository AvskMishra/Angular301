import { async } from '@angular/core/testing';
import { UserState } from './userDetails.reducer';
import { Directive } from '@angular/core';
import { userReducer } from './userDetails.reducer';
import { Action } from 'rxjs/internal/scheduler/Action';
import { RemoveUser, SetUser } from '../action/userDetails.action';

describe('Reducer test', () => {
    let service;

    beforeEach(() => {




    });
    it('should test USerReducer', async () => {
        let action = new RemoveUser();

        let userStateforRemove = {
            user: {
                id: 'id',
                name: 'User',
                email: 'email@email.com',
                image: 'image',
                token: 'token',
                role: 'role',
                preference: {
                    language: 'hi',
                    genre: [],
                    theater: [],
                },
                rating: {
                    movieId: '2',
                    rating: '5'
                }

            }
        };
        let UserState = {
            user: {
                id: '',
                name: '',
                email: '',
                image: '',
                token: '',
                role: '',
                preference: {
                    language: '',
                    genre: [],
                    theater: [],
                },
                rating: {
                    movieId: '',
                    rating: ''
                }

            }
        };
        const result = userReducer(userStateforRemove, action);
        expect(result).toEqual(UserState);
    });
    it('should test USerReducer', async () => {
        let userData = {
            'id': 'id',
            'name': 'name',
            'email': 'email',
            'image': 'image',
            'token': 'token',
            'role': 'role',
            'preference': {
                'language': 'Lan',
                'genre': [1],
                'theater': ['theater'],
            }
            ,
            'rating': {
                'movieId': 'string',
                'rating': 'string',
            },
        }
        let action = new SetUser(userData);
        let userStateforRemove = {
            user: {
                id: 'id',
                name: 'User',
                email: 'email@email.com',
                image: 'image',
                token: 'token',
                role: 'role',
                preference: {
                    language: 'hi',
                    genre: [],
                    theater: [],
                },
                rating: {
                    movieId: '2',
                    rating: '5'
                }

            }
        };
        // userReducer(UserState, action);
        const result = userReducer(userStateforRemove, action);
        const expectedResult = {
            user: userData
        };
        expect(result).toEqual(expectedResult);
    });

});
