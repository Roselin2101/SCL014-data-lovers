//import { example } from 
// './data.js';
import data from './data/potter/potter.js';

// Cabecera
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

// Segunda Pantalla mostrar personaje
const mostrarPersonajes = () => {
    for (let i = 0; i <= data.length; i++) {
            let namePersonaje = document.getElementById("name");
                namePersonaje.innerHTML +=`
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

let boton = document.getElementById("btn-personajes")
boton.addEventListener("click", mostrarPersonajes)

document.getElementById("btn-personajes").onclick = function () {
  documente.getElementById("primeraPantalla").style.display = "none"
}