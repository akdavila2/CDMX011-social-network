/* eslint-disable indent */
/**
 * @jest-enviroment jsdom
 */
/* eslint-disable eol-last */
import MockFirebase from './_mocks_/firebase-mock.js';
import { savePost } from '../src/lib/firebase.js';

global.firebase = MockFirebase();

describe('addPost', () => {
    it('I should be able to add a post', () => savePost('el principito', 10, 'recomendado', 'ana@labo.com', 'Fri Sep 10 2021').then((data) => {
        expect(data).tobe('el principito', 10, 'recomendado', 'ana@labo.com', 'Fri Sep 10 2021');
    }));
});