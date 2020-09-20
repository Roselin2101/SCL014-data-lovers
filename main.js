// import {filterHouse}from './data.js';
import data from './data/potter/potter.js';
import filterHouse from './data.js';


// funcion para mostrar personajes
const mostrarPersonajes = () => {
  for (let i = 0; i <= data.length; i += 1) {
    const namePersonaje = document.getElementById('container-personajes');
    namePersonaje.innerHTML += `
  <div class="wrap">
   <ul>
     <div class="tarjeta-wrap">
       <div class="tarjeta">
         <br>
          <div class="adelante"> <img src =${data[i].image} width="130" height="130"></</div>
          <div class="atras">
           <br>
            <p>Tipo de patronus: ${data[i].patronus}</p>
            <p>Nombre del actor: ${data[i].actor}</p>
            <p>Fecha de nacimiento: ${data[i].dateOfBirth}</p>
        </div>
      </div>
    </ul>
  </div>`;
    document.getElementById('filter-personajes').style.display = 'none';
    document.getElementById('container-personajes').style.display = 'block';
  }
};

const botonPersonajes = document.getElementById('btn-personajes');
botonPersonajes.addEventListener('click', mostrarPersonajes);

// FUNCION QUE PERMITE ORDENAR
const botonOrdenarPersonajes = document.getElementById('btn-Ordenarpersonajes');
botonOrdenarPersonajes.addEventListener('click', () => {
  const recorridoOrdenar = data.sort((a, b) => {
    if (a.name > b.name) { return 1; }
    if (a.name < b.name) { return -1; }
    return 0;
  });
  for (let i = 0; i <= recorridoOrdenar.length; i += 1) {
    const recorridoPersonajesOrdenados = document.getElementById('container-personajes');
    recorridoPersonajesOrdenados.innerHTML += `
    <div class="wrap">
      <ul>
       <div class="tarjeta-wrap">
         <div class="tarjeta">
         <br>
          <div class="adelante"><img src =${recorridoOrdenar[i].image} width="130" height="130"></</div>
            <div class="atras">
              <br>
              <p>Nombre en la saga:</p>
              <p>${recorridoOrdenar[i].name}</p>
            </div>
          </div>
        </ul>
     </div>`;
    document.getElementById('filter-personajes').style.display = 'none';
    document.getElementById('container-personajes').style.display = 'block';
  }
});

const botonGryffindor = document.getElementById('Entra_gryffindor');
botonGryffindor.addEventListener('click', () => {
  const casaGryffindor = filterHouse(data, 'Gryffindor');
  for (let i = 0; i <= casaGryffindor.length; i += 1) {
    const personajesGryffindor = document.getElementById('container-personajes');
    personajesGryffindor.innerHTML += `
    <div class="wrap">
      <ul>
       <div class="tarjeta-wrap">
         <div class="tarjeta">
         <br>
          <div class="adelante"><img src =${casaGryffindor[i].image} width="130" height="130"></</div>
            <div class="atras">
              <br>
              <p>Tipo de casa: ${casaGryffindor[i].house}</p>
              <p>Nombre en la saga:</p>
              <p>${casaGryffindor[i].name}</p>
            </div>
          </div>
        </ul>
     </div>`;
    document.getElementById('filter-personajes').style.display = 'none';
    document.getElementById('container-personajes').style.display = 'block';
  }
});

const botonSlytherin = document.getElementById('Entra_slytherin');
botonSlytherin.addEventListener('click', () => {
  const casaSlytherin = filterHouse(data, 'Slytherin');
  for (let i = 0; i <= casaSlytherin.length; i += 1) {
    const personajesSlytherin = document.getElementById('container-personajes');
    personajesSlytherin.innerHTML += `
    <div class="wrap">
      <ul>
       <div class="tarjeta-wrap">
         <div class="tarjeta">
         <br>
           <div class="adelante"><img src =${casaSlytherin[i].image} width="130" height="130"></</div>
            <div class="atras">
             <br>
              <p>Tipo de casa: ${casaSlytherin[i].house}</p>
              <p>Nombre en la saga:</p>
              <p>${casaSlytherin[i].name}</p>
            </div>
         </div>
       </ul>
     </div>`;
    document.getElementById('filter-personajes').style.display = 'none';
    document.getElementById('container-personajes').style.display = 'block';
  }
});

const botonHufflepuff = document.getElementById('Entra_hufflepuff');
botonHufflepuff.addEventListener('click', () => {
  const casaHufflepuff = filterHouse(data, 'Hufflepuff');
  for (let i = 0; i <= casaHufflepuff.length; i += 1) {
    const personajesHufflepuff = document.getElementById('container-personajes');
    personajesHufflepuff.innerHTML += `
    <div class="wrap">
     <ul>
      <div class="tarjeta-wrap">
       <div class="tarjeta">
        <br>
          <div class="adelante"><img src =${casaHufflepuff[i].image} width="130" height="130"></</div>
           <div class="atras">
            <br>
            <p>Tipo de casa: ${casaHufflepuff[i].house}</p>
            <p>Nombre en la saga:</p>
            <p>${casaHufflepuff[i].name}</p>
         </div>
       </div>
     </ul>
  </div>`;
    document.getElementById('filter-personajes').style.display = 'none';
    document.getElementById('container-personajes').style.display = 'block';
  }
});

const botonRavenclaw = document.getElementById('Entra_ravenclaw');
botonRavenclaw.addEventListener('click', () => {
  const casaRavenclaw = filterHouse(data, 'Ravenclaw');
  for (let i = 0; i <= casaRavenclaw.length; i += 1) {
    const personajesRavenclaw = document.getElementById('container-personajes');
    personajesRavenclaw.innerHTML += `
<div class="wrap">
   <ul>
     <div class="tarjeta-wrap">
      <div class="tarjeta">
       <br>
       <div class="adelante"><img src =${casaRavenclaw[i].image} width="130" height="130"></</div>
        <div class="atras">
        <br>
        <p>Tipo de casa: ${casaRavenclaw[i].house}</p>
        <p>Nombre en la saga:</p>
        <p>${casaRavenclaw[i].name}</p>
       </div>
     </div>
   </ul>
</div>`;
    document.getElementById('filter-personajes').style.display = 'none';
    document.getElementById('container-personajes').style.display = 'block';
  }
});
