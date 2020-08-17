import { filterHouse } from './data.js';
// aqui va todo lo del DOM para imprimir TODO  lo que queremos mostrar en el HTML
// aqui recorro toda la data sin filtrar ni ordenar, solo mostrar informacion e imagen 
// Importar las funciones que creamos en el data.js
// './data.js';importar  datos  de  './data/potter/potter.js' ;
// aqui recorro toda la data sin filtrar ni ordenar, solo mostrar informacion e imagen 
// Importar las funciones que creamos en el data.js
export const filterHouse = (house, data) => {
        let typeFilterHouse = data.filter(element => element.house.includes(house));
        return typeFilterHouse;
    }
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

/*Función para mostrar información relacionada al select de Casas*/





/*Función para mostrar información relacionada al select de Casas*/