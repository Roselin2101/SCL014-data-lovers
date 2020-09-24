// import {filterHouse}from './data.js';
import data from './data/potter/potter.js';
import { filterHouse, ordenarData } from './data.js';

//  mostrar personajes de la data completa
const mostrarPersonajes = () => {
  document.getElementById('container-personajes').innerHTML = '';
  for (let i = 0; i <= data.length; i += 1) {
    const namePersonajes = document.getElementById('container-personajes');
    namePersonajes.innerHTML += `
  <div class="wrap">
   <ul>
     <div class="tarjeta-wrap">
       <div class="tarjeta">
         <br>
          <div class="adelante"> <img src =${data[i].image} width="130" height="130"></div>
            <p>Tipo de patronus: ${data[i].patronus}</p>
            <p>Nombre del actor: ${data[i].actor}</p>
            <p>Fecha de nacimiento: ${data[i].dateOfBirth}</p>
      </div>
      </div>
    </ul>
  </div>`;
    // document.getElementById('filter-personajes').style.display = 'none';
    // document.getElementById('container-personajes').style.display = 'block'
  }
};
const botonPersonajes = document.getElementById('btn-personajes');
botonPersonajes.addEventListener('click', mostrarPersonajes);

// const botonPersonajes = document.getElementById('btn-personajes');
// botonPersonajes.addEventListener('click', mostrarPersonajes);

// Ordenar personajes de la data de A-Z
const botonOrdenarPersonajes = document.getElementById('btn-Ordenarpersonajes');
botonOrdenarPersonajes.addEventListener('click', () => {
  document.getElementById('container-personajes').innerHTML = ' ';
  const recorridoOrdenar = ordenarData(data);
  for (let i = 0; i <= recorridoOrdenar.length; i += 1) {
    const recorridoPersonajesOrdenados = document.getElementById('container-personajes');
    recorridoPersonajesOrdenados.innerHTML += `
    <div class="wrap">
      <ul>
       <div class="tarjeta-wrap">
         <div class="tarjeta">
         <br>
           <div class="adelante"><img src =${recorridoOrdenar[i].image} width="130" height="130"></div>
              <br>
              <p>Nombre en la saga:</p>
              <p>${recorridoOrdenar[i].name}</p>
            </div>
          </div>
        </ul>
     </div>`;
    // document.getElementById('filter-personajes').style.display = 'none';
    // document.getElementById('container-personajes').style.display = 'block';
  }
});
// mostrar personajes de la casa Gryffindor
const botonGryffindor = document.getElementById('Entra_gryffindor');
botonGryffindor.addEventListener('click', () => {
  document.getElementById('container-personajes').innerHTML = ' ';
  const casaGryffindor = filterHouse(data, 'Gryffindor');
  for (let i = 0; i <= casaGryffindor.length; i += 1) {
    const personajesGryffindor = document.getElementById('container-personajes');
    personajesGryffindor.innerHTML += `
    <div class="wrap">
      <ul>
       <div class="tarjeta-wrap">
         <div class="tarjeta">
         <br>
          <div class="adelante"><img src =${casaGryffindor[i].image} width="130" height="130"></div>
              <br>
              <p>Tipo de casa: ${casaGryffindor[i].house}</p>
              <p>Nombre en la saga:</p>
              <p>${casaGryffindor[i].name}</p>
            </div>
          </div>
        </ul>
     </div>`;
    // document.getElementById('filter-personajes').style.display = 'none';
    // document.getElementById('container-personajes').style.display = 'block';
  }
});

// mostrar personajes de la casa Slytherin
const botonSlytherin = document.getElementById('Entra_slytherin');
botonSlytherin.addEventListener('click', () => {
  document.getElementById('container-personajes').innerHTML = ' ';
  const casaSlytherin = filterHouse(data, 'Slytherin');
  for (let i = 0; i <= casaSlytherin.length; i += 1) {
    const personajesSlytherin = document.getElementById('container-personajes');
    personajesSlytherin.innerHTML += `
    <div class="wrap">
      <ul>
       <div class="tarjeta-wrap">
         <div class="tarjeta">
         <br>
           <div class="adelante"><img src =${casaSlytherin[i].image} width="130" height="130"></div>
             <br>
              <p>Tipo de casa: ${casaSlytherin[i].house}</p>
              <p>Nombre en la saga:</p>
              <p>${casaSlytherin[i].name}</p>
            </div>
         </div>
       </ul>
     </div>`;
    // document.getElementById('filter-personajes').style.display = 'none';
    // document.getElementById('container-personajes').style.display = 'block';
  }
});
// mostrar personanjes de la casa Hufflepuff

const botonHufflepuff = document.getElementById('Entra_hufflepuff');
botonHufflepuff.addEventListener('click', () => {
  document.getElementById('container-personajes').innerHTML = ' ';
  const casaHufflepuff = filterHouse(data, 'Hufflepuff');
  for (let i = 0; i <= casaHufflepuff.length; i += 1) {
    const personajesHufflepuff = document.getElementById('container-personajes');
    personajesHufflepuff.innerHTML += `
    <div class="wrap">
     <ul>
      <div class="tarjeta-wrap">
       <div class="tarjeta">
        <br>
          <div class="adelante"><img src =${casaHufflepuff[i].image} width="130" height="130"></div>
            <br>
            <p>Tipo de casa: ${casaHufflepuff[i].house}</p>
            <p>Nombre en la saga:</p>
            <p>${casaHufflepuff[i].name}</p>
         </div>
       </div>
     </ul>
  </div>`;
    // document.getElementById('filter-personajes').style.display = 'none';
    // document.getElementById('container-personajes').style.display = 'block';
  }
});
// mostrar personajes de la casa Ravenclaw
const botonRavenclaw = document.getElementById('Entra_ravenclaw');
botonRavenclaw.addEventListener('click', () => {
  document.getElementById('container-personajes').innerHTML = ' ';
  const casaRavenclaw = filterHouse(data, 'Ravenclaw');
  for (let i = 0; i <= casaRavenclaw.length; i += 1) {
    const personajesRavenclaw = document.getElementById('container-personajes');
    personajesRavenclaw.innerHTML += `
<div class="wrap">
   <ul>
     <div class="tarjeta-wrap">
      <div class="tarjeta">
       <br>
       <div class="adelante"><img src =${casaRavenclaw[i].image} width="130" height="130"></div>
        <br>
        <p>Tipo de casa: ${casaRavenclaw[i].house}</p>
        <p>Nombre en la saga:</p>
        <p>${casaRavenclaw[i].name}</p>
       </div>
     </div>
   </ul>
</div>`;
    // document.getElementById('filter-personajes').style.display = 'none';
    // document.getElementById('container-personajes').style.display = 'block';
  }
});
