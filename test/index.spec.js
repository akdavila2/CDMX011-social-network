// importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index';
import { Login } from '../'
/**
 * @jest-enviroment jsdom
 */

describe('Coleccion de test sobre el DOM', () => {
    test('debería ser una función', () => {
        expect(typeof myFunction).toBe('function');
    });
});

describe('Coleccion de test sobre el DOM', () => {
    test('test sobre render', () => {
        expect(typeof myFunction).toBe('function');
    });
});

//renderizado.outerHTML