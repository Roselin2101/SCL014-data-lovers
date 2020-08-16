//import { example } from 

import data from './data/potter/potter.js';
<<<<<<< HEAD
let cabeceraDinamica = document.getElementById("cabecera")
cabeceraDinamica.innerHTML +=`
<div class="container"> 
<header class="header2">
        <div>
          <div class="wrapper">
            <input class="logo" type="image" src="./imagenes/Logo wizarding.png" id="RegresarPrimeraPantalla"/>
          </div>
        </div>

        <div class="menu">
          <nav>
            <a href="#" id="btn-personajes">Personajes</a>
            <a target="_blank" href="https://www.dondeir.com/cine-y-tv/donde-ver-todas-las-peliculas-de-harry-potter-en-linea/2020/06/">Descargables</a> <!--el atributo target sirve para abrir una pagina fuera de la pagina de nosotras --></li>
            <a target="_blank" href="">Videos</a>
            <a target="_blank" href="https://www.wizardingworld.com/">Conoce mas!</a>
            <a target="_blank" href="https://www.wizardingworld.com/about-the-fan-club">Club de Fans</a>
          </nav>
        </div>
      </div>
      </header>
</div>`
const primerLogo = () => {
let primeraPantalla = document.getElementById("RegresarPrimeraPantalla")
primeraPantalla.innerHTML+=`
<section>
    // <div id="hola"> 
      <input class="harryPotter" type="image" src="./imagenes/harry potter 2.png" id="github"/>
      <input class="entraalcastillo" type="image" src="./imagenes/Hogwarts.png" id="castillo"/>
      <img src="./imagenes/Estrellas.png" alt="Fondo Estrellas">
    // </div>
    </section>`
}



const mostrarPersonajes = () => {
    for (let i = 0; i <= data.length; i++) {
            let namePersonaje = document.getElementById("name");
            namePersonaje.innerHTML +=`
                <div class="main">
                <ul>
                <br>
                <br>
                <div class="imagen">
                <img src =${data[i].image } width="150" height="200">
                </div>
                <br>
                <br>
                <li><h2>Nombre en la saga:</h2></li>
                <li><h2>${data[i].name}</h2></li>
                <li><h3>Tipo de patronus: ${data[i].patronus}</h3></li>
                <li><h3>Nombre del actor: ${data[i].actor}</h3></li>
                <li><h3>Fecha de nacimiento: ${data[i].dateOfBirth}</h3></li>
                <br>
                </ul>
                </div>`
=======
// Funcion que permite mostrar todos personajes con los datos
const mostrarPersonajes = () => {
        for (let i = 0; i <= data.length; i++) {
            console.log(data)[i]
            let namePersonaje = document.getElementById("datos");
            namePersonaje.innerHTML +=
                `<section>
                    <div class='imagenes'> <img src = ${data[i].image}></div>
                    <div class='datos'> <p>Nombre en la saga: ${data[i].name}</p></div>
                    <div class='datos'> <p>Tipo de patronus: ${data[i].patronus}</p></div>
                    <div class='datos'> <p>Nombre del actor: ${data[i].actor}</p></div>
                    <div class='datos'> <p>Fecha de nacimiento: ${data[i].dateOfBirth}</p></div>
                    </section>`
        }
>>>>>>> 12d44e1dcec25abc212b134b409d74deedb748f4
    }
    //mostrarPersonajes a los usuarios al hacer click en el boton personajes
let boton = document.getElementById("btn-datos")
boton.addEventListener("click", mostrarPersonajes)

//Funcion que permite entrar a la siguiente pantalla

<<<<<<< HEAD
let boton = document.getElementById("btn-personajes")
boton.addEventListener("click", mostrarPersonajes )

let botonInicio = document.getElementById("RegresarPrimeraPantalla")
botonInicio.addEventListener("click", primerLogo )
// console.log(botonInicio)
=======
let
>>>>>>> 12d44e1dcec25abc212b134b409d74deedb748f4
