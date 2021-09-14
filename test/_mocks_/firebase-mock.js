/* eslint-disable indent */
/**
 * @jest-enviroment jsdom
 */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
const firestore = () => {
    return {
        collection: (nameCollection) => {
            return {
                set: (objData) => {
                    return new Promise((resolve) => {
                        resolve('el principito', 10, 'recomendado', 'ana@labo.com', 'Fri Sep 10 2021');
                    });
                }
            };
        }
    };
};
const firebase = {
    firestore,
};

export default jest.fn(() => {
    return firebase;
});