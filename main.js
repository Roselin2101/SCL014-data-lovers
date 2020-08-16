//import { example } from 

import data from './data/potter/potter.js';
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
    }
    //mostrarPersonajes a los usuarios al hacer click en el boton personajes
let boton = document.getElementById("btn-datos")
boton.addEventListener("click", mostrarPersonajes)

//Funcion que permite entrar a la siguiente pantalla

let