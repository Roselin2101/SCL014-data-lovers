import { filterHouse, ordenarData } from '../src/data.js';

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
}];

describe('filterHouse', () => {
  it('is a function', () => {
    expect(typeof filterHouse).toBe('function');
  });
  test('deberia retornar Harry Potter, para cuando filtre por Gryffindor', () => {
    expect(filterHouse(dataHarryPrueba, 'Gryffindor')).toEqual([{ house: 'Gryffindor', name: 'Harry Potter' }]);
  });
});

describe('ordenarData', () => {
  it('is a function', () => {
    expect(typeof ordenarData).toBe('function');
  });
  test('deberia retornar la  dataHarryPrueba ordenada por name', () => {
    expect(ordenarData(dataHarryPrueba)).toEqual([{ name: 'Cedric Diggory', house: 'Hufflepuff' }, { name: 'Cho Chang', house: 'Ravenclaw' }, { name: 'Draco Malfoy', house: 'Slytherin' }, { name: 'Harry Potter', house: 'Gryffindor' }]);
  });
});
