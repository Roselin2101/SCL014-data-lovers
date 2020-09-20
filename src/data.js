const filterHouse = (data, house) => {
  const nuevoArr = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].house === house) {
      nuevoArr.push(data[i]);
    }
  }
  return nuevoArr;
};
export default filterHouse;

// export function orderAToZ(data) {
//   return data.sort((a, b) => a.name.localeCompare(b.name));
// Llama a la función y le envía toda la data con un sort de a a-z}


// export const ordenarData = (data, key, ordenar) => { }
// recorridoOrdenar = data.sort((a, b) => {
// if (a.key > b.key){return 1;}
// if (a.key < b.key){return -1;}
// return 0;
// })

// Ordenamos el json.
// Ojo, hay que incluir como parámetro:
// El JSON origninal
// La propiedad que queremos ordenar
// El orden (asc | desc)
// var oJSON = sortJSON(elJSON, 'num', 'asc');
// Ej. var oJSON = sortJSON(elJSON, 'nombre', 'asc');
// Ej. var oJSON = sortJSON(elJSON, 'sexo', 'desc');
// Pintamos en pantalla el JSON ordenado
// console.log(JSON.stringify(oJSON));
// var jsonO = document.getElementById('jsonO');
// jsonO.textContent = JSON.stringify(oJSON);
