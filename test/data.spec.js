import { mostrarPersonajesGryffindor, mostrarPersonajesSlytherin, mostrarPersonajesHufflepuff, mostrarPersonajesRavenclaw } from '../src/main.js';


describe('mostrarPersonajesGryffindor', () => {
    it('is a function', () => {
        expect(typeof mostrarPersonajesGryffindor).toBe('function');
    });

    it('returns `mostrarPersonajesGryffindor`', () => {
        expect(mostrarPersonajesGryffindor()).toBe('');
    });
});


describe('anotherExample', () => {
    it('is a function', () => {
        expect(typeof anotherExample).toBe('function');
    });

    it('returns `anotherExample`', () => {
        expect(anotherExample()).toBe('OMG');
    });
});