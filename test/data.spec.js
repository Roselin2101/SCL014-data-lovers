import {filterHouse} from '../src/data.js';

// //HACER FUNCION PARA MIS TEST AQUI DATA

const dataHarryPrueba = [{
    name: 'Harry Potter',
    house: 'Gryffindor',
},
{
    name: 'Cedric Diggory',
    house: 'Hufflepuff',
},
{
    name: 'Draco Malfoy',
    house: 'Slytherin',
},
{
    name: 'Cho Chang',
    house: 'Ravenclaw',
},
]
describe('filterHouse', () => {
    it('is a function', () => {
        expect(typeof filterHouse).toBe('function');
    });
    it('returns `Quiero que me devuelva el nombre y la casa que pertenecen los personajes de Harry Potter`', () => {
        expect(filterHouse(dataHarryPrueba,'Gryffindor')).toBe('Gryffindor');
    });
});

