//import { example } from 
// './data.js';

// './data.js';
import data from './data/potter/potter.js';
const mostrarPersonajes = () => {
    // realizo el recorrido con un for de la nueva variable para verificar que se guardo bien y semuestra la data
    for (let i = 0; i <= data.length; i++) {
        let namePersonaje = document.getElementById("container-personajes");
        namePersonaje.innerHTML += `
            <div class="wrap">
              <ul>
                <div class="tarjeta-wrap">              
                  <div class="tarjeta">
                    <br>
                      <div class="adelante"><img src =${data[i].image} width="130" height="130"></</div>
                      <div class="atras">
                        <br>
                        <p>Nombre en la saga:</p>
                        <p>${data[i].name}</p>
                        <p>Tipo de patronus: ${data[i].patronus}</p>
                        <p>Nombre del actor: ${data[i].actor}</p>
                        <p>Fecha de nacimiento: ${data[i].dateOfBirth}</p>
                      </div>
                  </div>
              </ul>
            </div>`

    }
}

//  mostrarPersonajes();
let boton = document.getElementById("btn-personajes")
boton.addEventListener("click", mostrarPersonajes)

// Funcion para mostrar personajes de Gryffindor

const mostrarPersonajesGryffindor = () => {
    for (let i = 0; i <= data.length; i++) {
        if (data[i].house === "Gryffindor") {
            let personajesGryffindor = document.getElementById("container-personajes");
            personajesGryffindor.innerHTML += `
  <div class="wrap">
    <ul>
      <div class="tarjeta-wrap">              
        <div class="tarjeta">
          <br>
            <div class="adelante"><img src =${data[i].image} width="130" height="130"></</div>
            <div class="atras">
              <br>
              <p>Tipo de casa: ${data[i].house}</p>
              <p>Nombre en la saga:</p>
              <p>${data[i].name}</p>
            </div>
        </div>
    </ul>
  </div>`

        }
    }
}

const botonGryffindor = document.getElementById("Entra_gryffindor");
botonGryffindor.addEventListener("click", mostrarPersonajesGryffindor);
// Funcion para mostrar personajes de Slytherin
const mostrarPersonajesSlytherin = () => {
    for (let i = 0; i <= data.length; i++) {
        if (data[i].house === "Slytherin") {
            let personajesSlytherin = document.getElementById("container-personajes");
            personajesSlytherin.innerHTML += `
<div class="wrap">
  <ul>
    <div class="tarjeta-wrap">              
      <div class="tarjeta">
        <br>
          <div class="adelante"><img src =${data[i].image} width="130" height="130"></</div>
          <div class="atras">
            <br>
            <p>Tipo de casa: ${data[i].house}</p>
            <p>Nombre en la saga:</p>
            <p>${data[i].name}</p>
          </div>
      </div>
  </ul>
</div>`

        }
    }
}

const botonSlytherin = document.getElementById("Entra_slytherin");
botonSlytherin.addEventListener("click", mostrarPersonajesSlytherin);

// Funcion para mostrar personajes de hufflepuff

const mostrarPersonajesHufflepuff = () => {
    for (let i = 0; i <= data.length; i++) {
        if (data[i].house === "Hufflepuff") {
            let personajesHufflepuff = document.getElementById("container-personajes");
            personajesHufflepuff.innerHTML += `
<div class="wrap">
  <ul>
    <div class="tarjeta-wrap">              
      <div class="tarjeta">
        <br>
          <div class="adelante"><img src =${data[i].image} width="130" height="130"></</div>
          <div class="atras">
            <br>
            <p>Tipo de casa: ${data[i].house}</p>
            <p>Nombre en la saga:</p>
            <p>${data[i].name}</p>
          </div>
      </div>
  </ul>
</div>`

        }
    }
}

const botonHufflepuff = document.getElementById("Entra_hufflepuff");
botonHufflepuff.addEventListener("click", mostrarPersonajesHufflepuff);

// Funcion para mostrar personajes de Revenclaw

const mostrarPersonajesRavenclaw = () => {
    for (let i = 0; i <= data.length; i++) {
        if (data[i].house === "Ravenclaw") {
            let personajesRavenclaw = document.getElementById("container-personajes");
            personajesRavenclaw.innerHTML += `
<div class="wrap">
<ul>
  <div class="tarjeta-wrap">              
    <div class="tarjeta">
      <br>
        <div class="adelante"><img src =${data[i].image} width="130" height="130"></</div>
        <div class="atras">
          <br>
          <p>Tipo de casa: ${data[i].house}</p>
          <p>Nombre en la saga:</p>
          <p>${data[i].name}</p>
        </div>
    </div>
</ul>
</div>`

        }
    }
}

const botonRavenclaw = document.getElementById("Entra_ravenclaw");
botonRavenclaw.addEventListener("click", mostrarPersonajesRavenclaw);