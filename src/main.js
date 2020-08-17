//import { example } from 
// aqui va todo lo del DOM para imprimir TODO  lo que queremos mostrar en el HTML
// aqui recorro toda la data sin filtrar ni ordenar, solo mostrar informacion e imagen 
// Importar las funciones que creamos en el data.js
// './data.js';importar  datos  de  './data/potter/potter.js' ;
// aqui recorro toda la data sin filtrar ni ordenar, solo mostrar informacion e imagen 
// Importar las funciones que creamos en el data.js
// './data.js';
import data from './data/potter/potter.js';

let cabeceraDinamica = document.getElementById("cabecera")
cabeceraDinamica.innerHTML += `
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
          
        <select name="" id="seleccion">Ordenar
      <option value="az">De la A a la Z</option>
      </select>
      <option value="az">De la A a la Z</option>
      </select>
            <select id="casas">
                <option value="">Casas</option>
                <option value="Gryffindor"> Gryffindor</option>
                <option value="Slytherin"> Slytherin</option>
                <option value="Ravenclaw"> Ravenclaw</option>
                <option value="Hufflepuff"> Hufflepuff</option>
              </select>
            </nav>
        </div>
      </div>
      </header>
</div>`

const mostrarPersonajes = () => {
        // realizo el recorrido con un for de la nueva variable para verificar que se guardo bien y semuestra la data
        for (let i = 0; i <= data.length; i++) {

            let namePersonaje = document.getElementById("name");

            namePersonaje.innerHTML += `
                <div class='main'>
                <ul>
                <div>
                <br><br>
                <img src =${data[i].image}></div>
                <br><br>
                <li><h2>Nombre en la saga:</h2></li>
                <li><h2>${data[i].name}</h2></li>
                <li><h3>Tipo de patronus: ${data[i].patronus}</h3></li>
                <li><h3>Nombre del actor: ${data[i].actor}</h3></li>
                <li><h3>Fecha de nacimiento: ${data[i].dateOfBirth}</h3></li>
                </ul>
                </div>`
                // con el + se esta concatenando cada iteracion y muestre de uno en uno 
                // en este caso se declara la funcion que esta guardada en el html
                //})
        }
    }
    //  mostrarPersonajes();
let boton = document.getElementById("btn-personajes")
boton.addEventListener("click", mostrarPersonajes)

// Establecer variable de ID para utilizarlos en Addeventlistener

const casas = document.getElementById('casas'); /*Variable que contiene a la ventana de personajes que mostrara data en HTML*/
const ordenar = document.getElementById("root");

document.getElementById("container").addEventListener("click", (evento) => {
    evento.preventDefault();
    document.getElementById("casas").style.display = "none";
    document.getElementById("root").style.display = "block";
});

/*Función para mostrar información relacionada al select de Casas*/

const casasHarryPotter = (data) => {

    for (let i = 0; i < data.length; i++) {
        casas.innerHTML += `
  <div class="card">
  <div class= "cardFull">
  <div class="front">
  <div class ="imagenes"><img src=${data[i].image} ></div>
  <h1>${data[i].name}</h1>
  </div>
  <div class="back">
  <div class ="imagenlogo"><img src=${data[i].house}></div>
  </div>
  </div>
  </div>
  `
    }
}



/*Función para mostrar información relacionada al select de Casas*/